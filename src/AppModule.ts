import { Module } from '@nestjs/common';
import { AuthorizeController } from './constollers/AuthorizeController';
import { BookController } from './constollers/BookController';
import { AuthorizeService } from './services/AuthorizeService';
import { AccountController } from './constollers/AccountController';
import { ReportController } from './constollers/ReportController';
import { ConfigurationController } from './constollers/ConfigurationController';
import { PreferenceController } from './constollers/PreferencesController';
import { TransactionController } from './constollers/TransactionController';


@Module({
    imports: [],
    controllers: [ 
        ConfigurationController,
        AuthorizeController, 
        PreferenceController,
        BookController, 
        AccountController, 
        TransactionController,
        ReportController,
    ],
    providers: [AuthorizeService],
})
export class AppModule {}
