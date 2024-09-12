import { ApiProperty } from '@nestjs/swagger'
import { TransferSubjectBase } from './TransferSubjectBase'

export class TransferSubject extends TransferSubjectBase{

    @ApiProperty({ description: '' })
    value: number
}
