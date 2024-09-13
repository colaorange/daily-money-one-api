import { ApiProperty, getSchemaPath } from '@nestjs/swagger'
import { TransactionBase } from './TransactionBase'
import { TransferSubject } from './TransferSubject'

export class Transaction extends TransactionBase {

    @ApiProperty({ description: '' })
    id: string

    @ApiProperty({ description: '' })
    editDatetime: number

    @ApiProperty({ description: '' })
    transDatetime: number

    @ApiProperty({ description: '', required: false, nullable: true })
    trash?: boolean | null

    @ApiProperty({ description: '', type: [TransferSubject]  })
    withdrawals: TransferSubject[]

    @ApiProperty({ description: '', type: [TransferSubject] })
    deposits: TransferSubject[]

    static Example: Transaction = {
        id: 'unique-id',
        editDatetime: 1726195601000,
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

    static Content = {
        "application/json": {
            schema: {
                $ref: getSchemaPath(Transaction)
            },
            example: Transaction.Example
        }
    }
}
