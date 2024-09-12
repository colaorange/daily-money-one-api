import { ApiProperty } from '@nestjs/swagger';
import { BookBase } from './BookBase';

export class BookUpdate extends BookBase{

    @ApiProperty({ description: '', required: false})
    name?: string

    static Example: BookUpdate = {
        name: 'The Book'
    }
}
