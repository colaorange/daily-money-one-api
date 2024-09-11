import { ApiProperty } from '@nestjs/swagger'

export class Result {
    @ApiProperty({ description: 'Indicate the result has error or not', required: false })
    error?: boolean

    @ApiProperty({ description: 'The message of the result' })
    message: string

    static Example: Result = {
        message: 'All goes well'
    }

    static ContentExample = { "application/json": { example: Result.Example } }
}
