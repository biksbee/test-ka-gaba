import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT || '30110';
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Test KA Gaba')
    .setDescription('Test KA Gaba documentation')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, documentFactory);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  await app.listen(PORT, () => {
    console.log(`Swagger docs: http://localhost:${PORT}/api/docs`);
    console.log(`Listen port ${PORT}`);
  });
}
bootstrap();
