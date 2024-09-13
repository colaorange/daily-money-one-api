import { ApiProperty, getSchemaPath } from '@nestjs/swagger'

export class Configuration {

    @ApiProperty({ description: '' })
    language: string

    @ApiProperty({
        description: '',
        type: 'object',
        additionalProperties: {
            type: 'object'
        }
    })
    translation: Record<string, any>


    static Example: Configuration = {
        language: 'zh',
        translation: {
            'key': 'value'
        }
    }

    static Content = {
        "application/json": {
            schema: {
                $ref: getSchemaPath(Configuration)
            },
            example: Configuration.Example
        }
    }
}