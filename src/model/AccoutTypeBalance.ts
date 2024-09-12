import { ApiProperty } from "@nestjs/swagger"
import { AccountType, AccountTypeRefPath } from "./AccountType"

export class AccountTypeBalance {

    @ApiProperty({ description: 'the account type of the balance', allOf: [{ $ref: AccountTypeRefPath }] })
    type: AccountType

    @ApiProperty({ description: 'the withdrawals amount of the balance' })
    withdrawalsAmount: number

    @ApiProperty({ description: 'the deposits amount of the balance' })
    depositsAmount: number
}