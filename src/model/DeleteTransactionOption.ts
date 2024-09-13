import { ApiProperty } from "@nestjs/swagger";

export class DeleteTransactionOption{

    @ApiProperty({ description: 'Cascade delete related data', required: false })
    cascade?: boolean
}