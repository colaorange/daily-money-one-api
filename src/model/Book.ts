import { ApiProperty } from '@nestjs/swagger'
import { BookBase } from './BookBase'

export class Book extends BookBase{
    
    @ApiProperty({ description: ''})
    id: string

    static Example: Book = {
        id: 'unique-id',
        name: 'The Book'
    }
}
