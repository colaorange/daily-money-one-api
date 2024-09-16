import { ApiProperty, getSchemaPath } from '@nestjs/swagger'

export class PublicSetting {

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


    static Example: PublicSetting = {
        language: 'zh',
        translation: {
            'key': 'value'
        }
    }

    static Content = {
        "application/json": {
            schema: {
                $ref: getSchemaPath(PublicSetting)
            },
            example: PublicSetting.Example
        }
    }
}