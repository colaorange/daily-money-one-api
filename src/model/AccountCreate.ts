import { ApiProperty } from '@nestjs/swagger'
import { AccountBase } from './AccountBase'
import { AccountType, AccountTypeRefPath } from './AccountType'

export class AccountCreate extends AccountBase{

    @ApiProperty({ description: ''})
    bookId: string
    
    @ApiProperty({ description: '' })
    name: string

    @ApiProperty({ description: '', allOf: [{ $ref: AccountTypeRefPath }] })
    type: AccountType

    static Example: AccountCreate = {
        bookId: 'unique-id',
        name: 'Cash',
        type: AccountType.ASSET

    }
}
