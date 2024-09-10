import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { AppExceptionFilter } from './AppExceptionFilter';
import { AppModule } from './AppModule';
import { createDocument } from './createDocument';

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const port = 3000

    app.useGlobalFilters(new AppExceptionFilter());
    app.use(bodyParser.text({ type: 'text/plain' }));

    //swagger
    const document = createDocument(app)
    SwaggerModule.setup('api/ui.html', app, document)

    await app.listen(port)
    console.log(`App listen on ${port}`)
}
bootstrap()
