#!/usr/bin/env bash
#
# Despliegue en Hostinger (hosting compartido con Node.js + SSH).
# Modelo: UNA sola app Node (el backend NestJS) sirve también la tienda
# (Angular SSR). Ejecútalo por SSH desde la raíz del repo en el servidor:
#
#     bash deploy.sh
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "==> Actualizando código (git pull)"
cd "$ROOT"
git pull --ff-only

echo "==> FRONTEND: compilar Angular (SSR)"
cd "$ROOT/Frontend"
npm ci
npm run build

echo "==> Copiar el bundle del frontend dentro del backend"
rm -rf "$ROOT/Backend/frontend"
mkdir -p "$ROOT/Backend/frontend"
cp -r dist/Frontend/* "$ROOT/Backend/frontend/"

echo "==> BACKEND: instalar, migrar y compilar"
cd "$ROOT/Backend"
npm ci                       # postinstall ejecuta 'prisma generate'
npx prisma migrate deploy    # aplica migraciones pendientes en MySQL
npm run build

echo "==> Reiniciar la app (Passenger)"
mkdir -p tmp && touch tmp/restart.txt

echo "==> Despliegue completado."
