import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppFactory } from './app';
import config from './core/config';

async function bootstrap() {
  const AppModule = AppFactory.create();
  // const AppModule = AppFactory.create(['AuthModule']);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(config.apiPrefix);
  const configSwagger = new DocumentBuilder()
    .setTitle('Faktoora demo')
    .setDescription('The users API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup(`${config.apiPrefix}/api-docs`, app, document);
  await app.listen(3000);
}
bootstrap();
