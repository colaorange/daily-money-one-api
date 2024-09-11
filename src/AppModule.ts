import { Module } from '@nestjs/common'
import { AuthorizeController } from './constollers/AuthorizeController';
import { AuthorizeService } from './services/AuthorizeService';
import { PetsController } from './constollers/PetsController';
import { PetsService } from './services/PetsService';
import { BooksController } from './constollers/BooksController';


@Module({
    imports: [],
    controllers: [ AuthorizeController, BooksController],
    providers: [AuthorizeService],
})
export class AppModule {}
