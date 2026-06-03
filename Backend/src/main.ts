import 'dotenv/config'; // carga .env ANTES de evaluar los módulos (ver database-type.ts)

import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { resolve } from 'node:path';
import { AppModule } from './app.module';
import { AppConfig } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config: ConfigService<AppConfig, true> = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  const apiPrefix = config.get('apiPrefix', { infer: true });
  app.setGlobalPrefix(apiPrefix);

  // Archivos subidos servidos como estáticos en /uploads (fuera del prefijo de API).
  const uploadDir = resolve(config.get('uploads.dir', { infer: true }));
  app.useStaticAssets(uploadDir, { prefix: '/uploads' });

  // Seguridad. crossOriginResourcePolicy en cross-origin para que el frontend
  // (otro puerto/origen) pueda cargar las imágenes servidas en /uploads.
  app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
  app.enableCors({
    origin: config.get('corsOrigins', { infer: true }),
    credentials: true,
  });

  // Validación global de DTOs (la "mejor opción" en Nest: class-validator)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina props no declaradas en el DTO
      forbidNonWhitelisted: true, // y rechaza si llegan props desconocidas
      transform: true, // instancia y castea tipos automáticamente
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Cierra conexiones de BD (onModuleDestroy) al apagar
  app.enableShutdownHooks();

  // Documentación OpenAPI
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest API Base')
    .setDescription('Auth JWT + refresh + RBAC · BD seleccionable (Mongo/SQL) · sockets opcionales')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  const port = config.get('port', { infer: true });
  await app.listen(port);

  logger.log(`API  -> http://localhost:${port}/${apiPrefix}`);
  logger.log(`Docs -> http://localhost:${port}/docs`);
  logger.log(`DB   -> ${config.get('database.type', { infer: true })}`);
}

void bootstrap();
