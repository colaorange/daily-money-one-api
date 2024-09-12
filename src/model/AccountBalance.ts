import { ApiProperty } from "@nestjs/swagger"
import { Account } from "./Account"

export class AccountBalance {

    @ApiProperty({ description: "The account instance of the balance"})
    account: Account

    @ApiProperty({ description: 'the withdrawals amount of the balance' })
    withdrawalsAmount: number

    @ApiProperty({ description: 'the deposits amount of the balance' })
    depositsAmount: number
}