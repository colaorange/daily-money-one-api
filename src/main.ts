import { NestFactory } from '@nestjs/core'
import { AppModule } from './AppModule'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { API_KEY_NAME, HEADER_CONNECTION_PASSWORD, TAG_DAILY_MONEY_ONE, TAG_DEMO } from './constants';
import { AppExceptionFilter } from './AppExceptionFilter';
import * as bodyParser from 'body-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const port = 3000
    
    app.useGlobalFilters(new AppExceptionFilter());
    app.use(bodyParser.text({ type: 'text/plain' }));
    
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
        .addTag(TAG_DAILY_MONEY_ONE)
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api/ui.html', app, document)

    await app.listen(port)
    console.log(`App listen on ${port}`)
}
bootstrap()
