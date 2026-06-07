# Despliegue en Hostinger — UNA app, compilando en tu PC

El backend NestJS sirve **también** la tienda (Angular SSR) desde el mismo
proceso. Compilas en tu PC y subes el build con un comando. El servidor solo
instala dependencias (no compila nada → sin riesgo de quedarse sin RAM).

- API: `https://emprm.store/api/...`
- Tienda (SSR): `https://emprm.store/`
- Swagger: `https://emprm.store/docs`
- Imágenes subidas: `https://emprm.store/uploads/...`

> **No necesitas subdominio** con este modelo.

---

## Parte 1 — Una sola vez en Hostinger (hPanel)

### 1.1 Base de datos MySQL
1. hPanel → **Bases de datos → MySQL** → crea BD y usuario.
2. Apunta **host, nombre BD, usuario, contraseña** (para `DATABASE_URL`).
   El host suele ser `localhost` si la app corre en el mismo servidor.

### 1.2 Dominio y SSL
Apunta `emprm.store` a Hostinger y activa **SSL** (hPanel → SSL).

### 1.3 Crear UNA "Node.js app"
hPanel → **Avanzado → Node.js**:
- **Node version:** 20.x
- **Application root:** la carpeta donde vivirá el backend (esta ruta es tu `APP_PATH`)
- **Application URL:** `emprm.store`
- **Application startup file:** `dist/main.js`

> Si tenías activado **Git → Auto-Deployment**, **desactívalo**: con este método
> no se usa (y evitamos que intente compilar y falle).

### 1.4 Crear el `.env` en el servidor
Dentro de la carpeta de la app (`APP_PATH`) crea un archivo **`.env`** (por SSH o
File Manager). Lo leen tanto la app como `prisma migrate`. Mínimo:
```
NODE_ENV=production
SERVE_FRONTEND=true
API_PREFIX=api
DATABASE_TYPE=mysql
DATABASE_URL=mysql://USUARIO:CLAVE@localhost:3306/NOMBRE_BD
JWT_ACCESS_SECRET=...
JWT_REFRESH_SECRET=...
PUBLIC_URL=https://emprm.store
```
Genera los secretos JWT:
```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

> Si tu dominio no es `emprm.store`, cámbialo también en
> `Frontend/src/environments/environment.production.ts` y en
> `Frontend/angular.json` → `security.allowedHosts` (si no, el SSR rechaza el
> Host y la tienda cae a render de cliente, perdiendo SEO).

---

## Parte 2 — Desplegar (cada vez, desde tu PC)

1. La primera vez, crea tu config local (no se sube al repo):
   ```bash
   cp deploy.config.example deploy.config
   # edita deploy.config con SSH_HOST, SSH_PORT, SSH_USER y APP_PATH
   ```
   Los datos SSH están en hPanel → **Avanzado → SSH**. `APP_PATH` es el
   *Application root* de tu Node.js app (con SSH, entra en la carpeta y haz `pwd`).

2. Despliega:
   ```bash
   bash deploy.sh
   ```
   Esto compila front + back en tu PC, sube solo el build por `rsync`, instala las
   deps de producción en el servidor, aplica migraciones y reinicia la app.
   (Te pedirá la contraseña SSH si no tienes clave configurada.)

> Alternativa sin script: compila en tu PC (`bash deploy.sh` hace los pasos), o
> sube `Backend/dist` y `Backend/frontend` por el **File Manager** de hPanel y
> luego, en la Node.js app, pulsa **Run NPM Install** y **Restart**. Las
> migraciones tendrías que correrlas igual (ver Parte 3).

---

## Parte 3 — Primer arranque (una vez)
Por SSH, dentro de `APP_PATH` (las deps ya están instaladas tras el primer `deploy.sh`):
```bash
npm run seed:prod   # crea el usuario admin inicial
```
Las **migraciones** las aplica `deploy.sh` solo. Si las quieres lanzar a mano:
`npx prisma migrate deploy`.

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
- El bundle del frontend va en `Backend/frontend/` (ignorado por git, lo genera el build).
- El servidor **no compila**: solo `npm ci --omit=dev` (rápido y con binarios
  nativos correctos: bcrypt, sharp, engine de Prisma).
