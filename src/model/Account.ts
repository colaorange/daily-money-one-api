import { ApiProperty } from '@nestjs/swagger'
import { AccountBase } from './AccountBase'
import { AccountType, AccountTypeRefPath } from './AccountType'

export class Account extends AccountBase {

    @ApiProperty({ description: '' })
    id: string

    @ApiProperty({ description: '' })
    bookId: string

    @ApiProperty({ description: '' })
    name: string

    @ApiProperty({ description: '', allOf: [{ $ref: AccountTypeRefPath }] })
    type: AccountType

    static Example: Account = {
        id: 'unique-id',
        bookId: 'unique-id',
        name: 'Case',
        type: AccountType.ASSET,
    }

    static ContentExample = { "application/json": { example: Account.Example } }
}