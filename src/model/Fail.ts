import { ApiProperty, getSchemaPath } from '@nestjs/swagger'

export class Fail {
    @ApiProperty({ description: 'The fail code', required: false })
    code?: number

    @ApiProperty({ description: 'The message of the fail' })
    message: string

    static Example: Fail = {
        code: 1450,
        message: 'Something went wrong'
    }

    static Content = {
        "application/json": {
            schema: {
                $ref: getSchemaPath(Fail)
            },
            example: Fail.Example
        }
    }
}


