import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API_KEY_NAME, HEADER_CONNECTION_TOKEN, TAG_ACCOUNT, TAG_BOOK, TAG_BASIC, TAG_REPORT, TAG_TRANSACTION } from './constants';
import { AccountType } from './model/AccountType';
import { FirstDayOfWeek } from './model/FirstDayOfWeek';

export function createDocument(app: INestApplication) {
    //swagger
    const config = new DocumentBuilder()
        .setTitle('Daily Money One API')
        .setDescription('Daily Money One Server Mode API')
        .setVersion('1.0.0')
        .addApiKey({
            type: 'apiKey',
            name: HEADER_CONNECTION_TOKEN,
            in: 'header',
        }, API_KEY_NAME)
        .addTag(TAG_BASIC)
        .addTag(TAG_BOOK)
        .addTag(TAG_ACCOUNT)
        .addTag(TAG_TRANSACTION)
        .addTag(TAG_REPORT)
        .build()
    const doc = SwaggerModule.createDocument(app, config)

    //for reuse enum 
    doc.components.schemas['AccountType'] = {
        type: 'string',
        enum: Object.values(AccountType)
    }
    doc.components.schemas['FirstDayOfWeek'] = {
        type: 'string',
        enum: Object.values(FirstDayOfWeek)
    }

    //sort path
    doc.paths = sortProperty(doc.paths, undefined, (path) => {
        //sort method
        return sortProperty(path, ['get', 'post', 'put', 'delete'])
    })
    //sort schema
    doc.components.schemas = sortProperty(doc.components.schemas, undefined, (schema) => {
        //sort properties
        if(schema['properties']){
            schema['properties'] = sortProperty(schema['properties'])
        }
        return schema;
    })
    return doc
}

function sortProperty<T, I>(object: T, order?: string[], transform?: (item: I) => I) {
    const orderMap = order && new Map(order.map((value, index) => [value, index]));
    return Object.keys(object)
        .sort((a, b) => {
            if (orderMap) {
                const indexA = orderMap.has(a) ? orderMap.get(a)! : order.length;
                const indexB = orderMap.has(b) ? orderMap.get(b)! : order.length;
                const r = indexA - indexB
                if (r !== 0) {
                    return r
                }
            }
            return a.localeCompare(b)
        })
        .reduce((acc, key) => {
            acc[key] = transform ? transform(object[key]) : object[key];
            return acc;
        }, {});
}
