import 'dotenv/config'; // carga .env ANTES de evaluar los módulos (ver database-type.ts)

import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { AppConfig } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService<AppConfig, true> = app.get(ConfigService);
  const logger = new Logger('Bootstrap');

  const apiPrefix = config.get('apiPrefix', { infer: true });
  app.setGlobalPrefix(apiPrefix);

  // Seguridad
  app.use(helmet());
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
