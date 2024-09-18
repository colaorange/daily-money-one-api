import { ApiProperty, getSchemaPath } from '@nestjs/swagger'
import { Profile } from './Profile'

export class Preferences{

    @ApiProperty({ description: '', required: false })
    profile?: Profile

    @ApiProperty({ description: '' })
    dateTimeFormat: string

    @ApiProperty({ description: '' })
    dateFormat: string

    @ApiProperty({ description: '' })
    timeFormat: string

    static Example: Preferences = {
        profile: {
            name: 'Dennis'
        },
        dateFormat: 'YYYY/MM/DD',
        timeFormat: 'HH:mm',
        dateTimeFormat: 'YYYY/MM/DD HH:mm'
    }

    static Content = {
        "application/json": {
            schema: {
                $ref: getSchemaPath(Preferences)
            },
            example: Preferences.Example
        }
    }
}