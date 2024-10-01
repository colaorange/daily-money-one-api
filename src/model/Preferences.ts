import { ApiProperty, getSchemaPath } from '@nestjs/swagger'
import { FirstDayOfWeek, FirstDayOfWeekRefPath } from './FirstDayOfWeek'
import { Profile } from './Profile'
import { AccountType, AccountTypeRefPath } from './AccountType'

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

    @ApiProperty({ description: '', required: false })
    adsLevel?: number


    static Example: Preferences = {
        profile: {
            name: 'Dennis'
        },
        monthFormat: 'YYYY/MM' ,
        dateFormat: 'YYYY/MM/DD',
        timeFormat: 'HH:mm',
        dateTimeFormat: 'YYYY/MM/DD HH:mm',
        timeZone: 'Asia/Taipei',
        firstDayOfWeek: FirstDayOfWeek.Sun
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