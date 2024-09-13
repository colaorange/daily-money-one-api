import { ApiProperty, getSchemaPath } from '@nestjs/swagger'

export class Message {

    @ApiProperty({ description: 'The message' })
    message: string

    static Example: Message = {
        message: 'All goes well'
    }

    static Content = {
        "application/json": {
            schema: {
                $ref: getSchemaPath(Message)
            },
            example: Message.Example
        }
    }
}
