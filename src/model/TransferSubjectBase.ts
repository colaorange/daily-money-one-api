import { ApiProperty } from '@nestjs/swagger'

export class TransferSubjectBase {

    @ApiProperty({ description: '' })
    accountId: string

    @ApiProperty({ description: '', required: false, nullable: true  })
    note?: string | null
}
