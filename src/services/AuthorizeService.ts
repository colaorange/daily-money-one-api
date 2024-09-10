import { Result } from '@/model/Result';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorizeService {
    authorize(password: string): Result {
        return password ? {
            message: `OK ${password}`
        } : {
            error: true,
            message: `Worng password`
        }
    }
}
