import { ApiProperty, getSchemaPath } from '@nestjs/swagger'

export class Preferences{

    @ApiProperty({ description: '' })
    dateTimeFormat: string

    @ApiProperty({ description: '' })
    dateFormat: string

    @ApiProperty({ description: '' })
    timeFormat: string

    static Example: Preferences = {
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