import { Result } from '@/model/Result';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorizeService {
    authorize(connectionToken: string): Result {
        return connectionToken ? {
            message: `OK ${connectionToken}`
        } : {
            error: true,
            message: `Worng token`
        }
    }
}
