import { Module } from '@nestjs/common'
import { HelloController } from './constollers/HelloController';
import { HelloService } from './services/HelloService';
import { AuthroizeController } from './constollers/AuthorizeController';
import { AuthorizeService } from './services/AuthorizeService';
import { PetsController } from './constollers/PetsController';
import { PetsService } from './services/PetsService';


@Module({
    imports: [],
    controllers: [HelloController, PetsController, AuthroizeController],
    providers: [HelloService, PetsService, AuthorizeService],
})
export class AppModule {}
