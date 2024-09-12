import { Module } from '@nestjs/common';
import { AuthorizeController } from './constollers/AuthorizeController';
import { BookController } from './constollers/BookController';
import { AuthorizeService } from './services/AuthorizeService';
import { AccountController } from './constollers/AccountController';
import { ReportController } from './constollers/ReportController';


@Module({
    imports: [],
    controllers: [ AuthorizeController, BookController, AccountController, ReportController],
    providers: [AuthorizeService],
})
export class AppModule {}
