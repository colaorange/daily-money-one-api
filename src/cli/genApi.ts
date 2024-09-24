import { AppModule } from '@/AppModule';
import { createDocument } from '@/createDocument';
import { NestFactory } from '@nestjs/core';

import { writeFileSync, mkdirSync } from 'fs';
import * as path from 'path';

async function genApi() {
    const app = await NestFactory.create(AppModule);

    const document = createDocument(app)

    const definitionPath = path.resolve(process.cwd(), './dist/api-definition.json')

    const dirPath = path.dirname(definitionPath);
    mkdirSync(dirPath, { recursive: true})

    writeFileSync(definitionPath, JSON.stringify(document, undefined, 2));

    console.log(`definition has been generated successfully at ${definitionPath}`);

    await app.close();
}

function main() {
    genApi()
}


if (require.main === module) {
    main();
}