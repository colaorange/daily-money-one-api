import { ApiProperty } from "@nestjs/swagger"

export class SortBy {
    
    @ApiProperty({ description: 'by which field'})
    field: string

    @ApiProperty({ description: 'desc or asc', required: false })
    desc?: boolean
}