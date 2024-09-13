import { ApiProperty } from '@nestjs/swagger';
import { TransactionBase } from './TransactionBase';
import { TransferSubjectUpdate } from './TransferSubjectUpdate';

export class TransactionUpdate extends TransactionBase{

    @ApiProperty({ description: '' })
    transDatetime: number

    @ApiProperty({ description: '', required: false, nullable: true })
    trash?: boolean | null

    @ApiProperty({ description: '', required: false, nullable: true, type: [TransferSubjectUpdate]  })
    withdrawals?: TransferSubjectUpdate[] | null

    @ApiProperty({ description: '', required: false, nullable: true,type: [TransferSubjectUpdate]  })
    deposits?: TransferSubjectUpdate[] | null

    static Example: TransactionUpdate = {
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
