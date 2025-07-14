import { ApiProperty, getSchemaPath } from '@nestjs/swagger'
import { FirstDayOfWeek, FirstDayOfWeekRefPath } from './FirstDayOfWeek'
import { Profile } from './Profile'
import { AccountType, AccountTypeRefPath } from './AccountType'
import { FirstDayOfMonth } from './FirstDayOfMonth'
import { FirstDayOfYear } from './FirstDayOfYear'

export class Preferences {

    @ApiProperty({ description: '', required: false })
    profile?: Profile

    @ApiProperty({ description: '', required: false })
    primaryBookId?: string

    @ApiProperty({ description: '' })
    dateTimeFormat: string

    @ApiProperty({ description: '' })
    dateFormat: string

    @ApiProperty({ description: '' })
    timeFormat: string

    @ApiProperty({ description: '' })
    monthFormat: string

    @ApiProperty({ description: '' })
    timeZone: string

    @ApiProperty({ description: '', allOf: [{ $ref: FirstDayOfWeekRefPath }] })
    firstDayOfWeek: FirstDayOfWeek

    @ApiProperty({ description: '', minimum: 1, maximum: 28, type: Number })
    firstDayOfMonth: FirstDayOfMonth

    @ApiProperty({ description: '', type: [Number], minItems: 2, maxItems: 2 })
    firstDayOfYear: FirstDayOfYear


    @ApiProperty({ description: '', required: false })
    fixBalanceFractionDigits?: boolean

    @ApiProperty({ description: '', required: false })
    hideEmptyBalance?: boolean
    
    @ApiProperty({
        description: "",
        required: false,
        isArray: true,
        allOf: [{ $ref: AccountTypeRefPath }]
    })
    balanceAccountTypeOrder?: AccountType[]

    static Example: Preferences = {
        profile: {
            name: 'Dennis'
        },
        monthFormat: 'YYYY/MM' ,
        dateFormat: 'YYYY/MM/DD',
        timeFormat: 'HH:mm',
        dateTimeFormat: 'YYYY/MM/DD HH:mm',
        timeZone: 'Asia/Taipei',
        firstDayOfWeek: FirstDayOfWeek.Sun,
        firstDayOfMonth: 1,
        firstDayOfYear: [0, 1]
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