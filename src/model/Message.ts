import { ApiProperty } from '@nestjs/swagger'

export class Message {

    @ApiProperty({ description: 'The message' })
    message: string

    static Example: Message = {
        message: 'All goes well'
    }

    static ContentExample = { "application/json": { example: Message.Example } }
}
