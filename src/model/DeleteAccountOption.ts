import { ApiProperty } from "@nestjs/swagger";

export class DeleteAccountOption{

    @ApiProperty({ description: 'Cascade delete related data', required: false })
    cascade?: boolean
}