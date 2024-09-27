import { ApiProperty } from "@nestjs/swagger"

export class Balance {

    @ApiProperty({ description: 'the withdrawals amount of the balance' })
    withdrawalsAmount: number

    @ApiProperty({ description: 'the deposits amount of the balance' })
    depositsAmount: number
}