import { writeFileSync } from 'fs';

const version = Date.now().toString(36); // base36 corto, ej: "m5kz1q2"
const content = `export const BUILD_VERSION = '${version}';\n`;

writeFileSync('src/environments/build-version.ts', content);
console.log(`[build] imgVersion = ${version}`);
