import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const setupSwagger = (app: INestApplication) => {
    const { APP_PORT, } = process.env;

    const options = new DocumentBuilder()
        .setTitle('API')
        .setDescription('API description')
        .setVersion('1.0')
        .addServer(`http://localhost:${APP_PORT}`, 'local')
        .build();

    SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, options));
}