#!/usr/bin/env bash
#
# Despliegue "compilo en mi PC y subo el build" a Hostinger.
# Ejecútalo DESDE TU PC (no en el servidor):   bash deploy.sh
#
# Qué hace:
#   1. Compila el frontend (Angular SSR) y el backend (NestJS) en tu máquina.
#   2. Copia el bundle del frontend dentro de Backend/frontend (1 sola app).
#   3. Sube por rsync SOLO lo compilado (sin node_modules) al servidor.
#   4. En el servidor: instala deps de producción, migra la BD y reinicia.
#
# Configura los datos de conexión en un archivo ./deploy.config (gitignored):
#   SSH_HOST=tu-host
#   SSH_PORT=65002
#   SSH_USER=tu-usuario
#   APP_PATH=/home/tu-usuario/.../Backend     # carpeta de la Node.js app
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

# --- Cargar config local (no se sube al repo) ---
if [[ -f deploy.config ]]; then
  # shellcheck disable=SC1091
  source deploy.config
fi
: "${SSH_HOST:?Falta SSH_HOST (ponlo en deploy.config)}"
: "${SSH_PORT:?Falta SSH_PORT (ponlo en deploy.config)}"
: "${SSH_USER:?Falta SSH_USER (ponlo en deploy.config)}"
: "${APP_PATH:?Falta APP_PATH (ponlo en deploy.config)}"

SSH_OPTS="-p ${SSH_PORT}"

echo "==> [1/4] Compilando frontend (Angular SSR)"
( cd Frontend && npm run build )

echo "==> [2/4] Copiando el bundle del frontend dentro del backend"
rm -rf Backend/frontend
mkdir -p Backend/frontend
cp -r Frontend/dist/Frontend/* Backend/frontend/

echo "==> [3/4] Compilando backend (NestJS)"
( cd Backend && npm run build )

echo "==> [4/4] Subiendo al servidor (sin node_modules) y reiniciando"
rsync -az --delete \
  --exclude '.env' --exclude 'uploads/' --exclude 'tmp/' --exclude 'node_modules/' \
  -e "ssh ${SSH_OPTS}" \
  Backend/dist Backend/frontend Backend/package.json Backend/package-lock.json Backend/prisma \
  "${SSH_USER}@${SSH_HOST}:${APP_PATH}/"

# En el servidor: instala prod deps (binarios nativos correctos + prisma generate),
# aplica migraciones y reinicia Passenger. NO compila nada aquí.
ssh ${SSH_OPTS} "${SSH_USER}@${SSH_HOST}" \
  "cd '${APP_PATH}' && npm ci --omit=dev && npx prisma migrate deploy && mkdir -p tmp && touch tmp/restart.txt"

echo "==> Despliegue completado: https://emprm.store"
