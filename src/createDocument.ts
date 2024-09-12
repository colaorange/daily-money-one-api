import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API_KEY_NAME, HEADER_CONNECTION_PASSWORD, TAG_ACCOUNT, TAG_AUTHORIZATION, TAG_BOOK, TAG_MISC, TAG_REPORT, TAG_TRANSACTION } from './constants';
import { AccountType } from './model/AccountType';

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
        // .addTag(TAG_DEMO)
        .addTag(TAG_AUTHORIZATION)
        .addTag(TAG_BOOK)
        .addTag(TAG_ACCOUNT)
        .addTag(TAG_TRANSACTION)
        .addTag(TAG_REPORT)
        .addTag(TAG_MISC)
        .build()
    const doc = SwaggerModule.createDocument(app, config)

    //for reuse enum 
    doc.components.schemas['AccountType'] = {
        type: 'string',
        enum: Object.values(AccountType)
    }
    
    //sort
    doc.components.schemas = Object.keys(doc.components.schemas)
        .sort((a, b) => a.localeCompare(b))
        .reduce((acc, key) => {
            acc[key] = doc.components.schemas[key];
            return acc;
        }, {});

    return doc
}

