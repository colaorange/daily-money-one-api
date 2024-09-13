import { ApiProperty } from '@nestjs/swagger'
import { TransferSubjectBase } from './TransferSubjectBase'

export class TransferSubjectCreate extends TransferSubjectBase {

    @ApiProperty({ description: '' })
    value: number
    
}
