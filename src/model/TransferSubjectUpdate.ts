import { ApiProperty } from '@nestjs/swagger'
import { TransferSubjectBase } from './TransferSubjectBase'

export class TransferSubjectUpdate extends TransferSubjectBase{

    @ApiProperty({ description: '' })
    value?: number
}
