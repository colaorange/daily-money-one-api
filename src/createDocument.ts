import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API_KEY_NAME, HEADER_CONNECTION_PASSWORD,  TAG_AUTHORIZATION,  TAG_BOOKS,  TAG_DEMO } from './constants';

export function createDocument(app: INestApplication) {
    //swagger
    const config = new DocumentBuilder()
        .setTitle('Daily Money One API')
        .setDescription('Daily Money One Server Mode API')
        .setVersion('1.0')
        .addApiKey({
            type: 'apiKey',
            name: HEADER_CONNECTION_PASSWORD,
            in: 'header',
        }, API_KEY_NAME)
        .addTag(TAG_DEMO)
        .addTag(TAG_AUTHORIZATION)
        .addTag(TAG_BOOKS)
        .build()
    return SwaggerModule.createDocument(app, config)
}

