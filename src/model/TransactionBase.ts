import { ApiProperty } from '@nestjs/swagger'

export class TransactionBase {

    @ApiProperty({ description: '', required: false, nullable: true  })
    note?: string | null
    
}
