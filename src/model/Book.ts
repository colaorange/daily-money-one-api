import { ApiProperty, getSchemaPath } from '@nestjs/swagger'
import { BookBase } from './BookBase'

export class Book extends BookBase{
    
    @ApiProperty({ description: ''})
    id: string

    @ApiProperty({ description: ''})
    name: string

    static Example: Book = {
        id: 'unique-id',
        name: 'The Book'
    }

    static Content = {
        "application/json": {
            schema: {
                $ref: getSchemaPath(Book)
            },
            example: Book.Example
        }
    }
}
