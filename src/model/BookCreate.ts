import { ApiProperty } from '@nestjs/swagger'
import { BookBase } from './BookBase'

export class BookCreate extends BookBase{

    @ApiProperty({ description: ''})
    name: string

    static Example: BookCreate = {
        name: 'The Book'
    }
}
