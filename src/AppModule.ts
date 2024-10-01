import { Module } from '@nestjs/common';
import { AuthorizeController } from './constollers/AuthorizeController';
import { BookController } from './constollers/BookController';
import { AuthorizeService } from './services/AuthorizeService';
import { AccountController } from './constollers/AccountController';
import { ReportController } from './constollers/ReportController';
import { ConfigurationController } from './constollers/PublicSettingController';
import { PreferenceController } from './constollers/PreferencesController';
import { TransactionController } from './constollers/TransactionController';
import { WatchAdsController } from './constollers/WatchAds';


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
        WatchAdsController
    ],
    providers: [AuthorizeService],
})
export class AppModule {}
