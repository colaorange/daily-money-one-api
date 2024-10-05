import { ApiProperty, getSchemaPath } from '@nestjs/swagger'
import { ColorScheme } from './ColorScheme'

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

    @ApiProperty({ description: '' })
    colorScheme: ColorScheme

    @ApiProperty({ description: '', required: false })
    adsLevel?: number

    static Example: Partial<PublicSetting> = {
        language: 'zh',
        translation: {
            'key': 'value'
        },
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