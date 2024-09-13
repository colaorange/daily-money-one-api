import { ApiProperty } from '@nestjs/swagger'
import { TransactionBase } from './TransactionBase'
import { TransferSubjectCreate } from './TransferSubjectCreate'

export class TransactionCreate extends TransactionBase{

    @ApiProperty({ description: '' })
    transDatetime: number

    @ApiProperty({ description: '', required: false, type: [TransferSubjectCreate] })
    withdrawals?: TransferSubjectCreate[]

    @ApiProperty({ description: '', required: false, type: [TransferSubjectCreate] })
    deposits?: TransferSubjectCreate[]

    static Example: TransactionCreate = {
        transDatetime: 1726109201000,
        deposits: [
            {
                accountId: 'unique-id',
                value: 200
            }
        ],
        withdrawals: [
            {
                accountId: 'unique-id',
                value: 200
            }
        ],
        note: 'Food'
    }
}
