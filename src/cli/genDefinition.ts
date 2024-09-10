import { AppModule } from '@/AppModule';
import { createDocument } from '@/createDocument';
import { NestFactory } from '@nestjs/core';

import { writeFileSync } from 'fs';
import * as path from 'path';

async function genDefinition() {
    const app = await NestFactory.create(AppModule);

    const document = createDocument(app)

    const definitionPath = path.resolve(process.cwd(), './dist/api-definition.json')

    writeFileSync(definitionPath, JSON.stringify(document));

    console.log(`definition has been generated successfully at ${definitionPath}`);

    await app.close();
}

function main() {
    genDefinition()
}


if (require.main === module) {
    main();
}