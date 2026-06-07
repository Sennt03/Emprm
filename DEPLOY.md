# Despliegue en Hostinger — UNA sola app (NestJS + Angular SSR + MySQL)

El backend NestJS sirve **también** la tienda (Angular SSR) desde el mismo
proceso. Así solo necesitas:

| Pieza | Qué es | Dónde |
|-------|--------|-------|
| App Node única | NestJS (API en `/api`) + tienda SSR (`/`) | 1 "Node.js app" en hPanel |
| BD | MySQL gestionado | hPanel → Bases de datos MySQL |

- API: `https://emprm.store/api/...`
- Tienda (SSR): `https://emprm.store/`
- Swagger: `https://emprm.store/docs`
- Imágenes subidas: `https://emprm.store/uploads/...`

> **No necesitas subdominio** con este modelo. (Si algún día separas la API,
> en hPanel → **Dominios → Subdominios** creas `api.emprm.store` y listo.)

Cómo funciona: en `Backend/src/main.ts`, si `SERVE_FRONTEND=true`, se monta el
handler del SSR de Angular como middleware. Las rutas `/api`, `/docs` y
`/uploads` las atiende Nest; el resto las renderiza Angular. El bundle del
frontend (`server.mjs`, ~800 KB, autocontenido) se copia a `Backend/frontend/`
durante el build, por eso **no hace falta subir los `node_modules` del frontend**.

---

## Parte 1 — Una sola vez en Hostinger (hPanel)

### 1.1 Base de datos MySQL
1. hPanel → **Bases de datos → MySQL** → crea BD y usuario.
2. Apunta **host, nombre BD, usuario, contraseña** (para `DATABASE_URL`).
3. Si vas a migrar desde GitHub Actions (host remoto), entra en **Remote MySQL**
   y autoriza la IP que conecta. Si todo corre en el mismo servidor, el host
   suele ser `localhost`.

### 1.2 Dominio
Apunta `emprm.store` a Hostinger (si lo compraste allí, ya está). Activa **SSL**
en hPanel → **SSL**.

### 1.3 Crear UNA "Node.js app"
hPanel → **Avanzado → Node.js** (o "Setup Node.js App"):
- **Node version:** 20.x
- **Application root:** carpeta donde vivirá el backend (ej. `domains/emprm.store/app/Backend`)
- **Application URL:** `emprm.store`
- **Application startup file:** `dist/main.js`

### 1.4 Variable de entorno
Crea el archivo **`.env` dentro de la carpeta del backend en el servidor**
(no se sube por git). Usa `Backend/.env.production.example` como plantilla.
Imprescindibles:
- `SERVE_FRONTEND=true`
- `API_PREFIX=api`
- `DATABASE_URL=...` (datos del paso 1.1)
- `JWT_ACCESS_SECRET` / `JWT_REFRESH_SECRET` (genéralos):
  ```bash
  node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
  ```
- `PUBLIC_URL=https://emprm.store`

> Si tu dominio final no es `emprm.store`, cámbialo también en
> `Frontend/src/environments/environment.production.ts` y en
> `Frontend/angular.json` → `security.allowedHosts` (necesario para que el SSR
> no rechace el Host; si no, la tienda cae a render de cliente y pierde SEO).

---

## Parte 2 — Cómo desplegar (push y listo)

### Opción A (recomendada): GitHub Actions
Compila en la nube y sube el resultado por SSH. Evita compilar Angular en el
hosting compartido (suele quedarse sin RAM). Workflow ya incluido en
`.github/workflows/deploy.yml`; se dispara al hacer **push a la rama `prod`**.

**Secrets** en GitHub → repo → Settings → Secrets and variables → Actions:

| Secret | Valor |
|--------|-------|
| `SSH_HOST` | IP/host SSH de Hostinger (hPanel → Avanzado → SSH) |
| `SSH_PORT` | Puerto SSH (Hostinger suele usar `65002`) |
| `SSH_USER` | Usuario SSH |
| `SSH_KEY` | Clave **privada** SSH |
| `APP_PATH` | Ruta absoluta de la carpeta del backend en el servidor |

Generar clave SSH (en tu PC) y registrarla:
```bash
ssh-keygen -t ed25519 -f hostinger_deploy -N ""
# Sube hostinger_deploy.pub a hPanel → SSH (authorized keys)
# Pega el contenido de hostinger_deploy (privada) en el secret SSH_KEY
```

Uso diario:
```bash
git checkout -b prod        # solo la primera vez
git push -u origin prod     # cada push a prod -> despliegue automático
```

### Opción B: Git nativo de Hostinger + script SSH
1. hPanel → **Avanzado → Git** → conecta el repo y la rama `prod`, activa
   **Auto-Deployment** (te da un webhook para GitHub → Settings → Webhooks).
   Esto hace `git pull` automático en cada push, pero **no compila ni reinicia**.
2. Tras el push, entra por SSH y lanza el script del repo:
   ```bash
   ssh -p 65002 usuario@host
   cd ~/ruta/del/repo
   bash deploy.sh   # pull + build front + copiar + build back + migrar + reiniciar
   ```

> Riesgo de B: compilar Angular SSR en compartido puede agotar la memoria. Si
> `npm run build` falla, usa la Opción A.

---

## Parte 3 — Primer arranque (una vez)
```bash
cd <APP_PATH>
npx prisma migrate deploy   # crea las tablas
npm run seed:prod           # crea el usuario admin inicial
```
Reinicia desde hPanel ("Restart") o `touch tmp/restart.txt`.

---

## Checklist
- [ ] `https://emprm.store/` carga la tienda; en "ver código fuente" el HTML viene
      con contenido (SSR ok, no solo `<app-root></app-root>` vacío).
- [ ] `https://emprm.store/api/...` responde y `/docs` muestra Swagger.
- [ ] Login del panel funciona.
- [ ] Las imágenes de `/uploads` cargan.
- [ ] `https://emprm.store/sitemap.xml` devuelve XML.

## Notas
- **uploads** persiste en `Backend/uploads`; el deploy NO lo borra.
- Cambios solo de frontend igualmente recompilan y reinician la app (no basta copiar).
- El bundle del frontend va en `Backend/frontend/` (ignorado por git, se genera al build).
