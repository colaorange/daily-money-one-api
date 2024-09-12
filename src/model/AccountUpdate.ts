import { ApiProperty } from '@nestjs/swagger';
import { AccountBase } from './AccountBase';
import { AccountType, AccountTypeRefPath } from './AccountType';

export class AccountUpdate extends AccountBase{

    @ApiProperty({ description: '', allOf: [{ $ref: AccountTypeRefPath }] })
    type?: AccountType

    @ApiProperty({ description: '' })
    name?: string

    static Example: AccountUpdate = {
        name: 'Cash',
        type: AccountType.ASSET
    }
}
