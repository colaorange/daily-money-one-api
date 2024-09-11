import { ApiProperty } from "@nestjs/swagger";

export class DeleteBookOption{

    @ApiProperty({ description: 'Cascade delete related data', required: false })
    cascade?: boolean
}