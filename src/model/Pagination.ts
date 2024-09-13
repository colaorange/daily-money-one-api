import { ApiProperty } from "@nestjs/swagger"


export class Pagination<T> {

    @ApiProperty({ description: "The start of the query"})
    start: number
    @ApiProperty({ description: "The limit of the query"})
    limit: number
    @ApiProperty({ description: "The total size of all the data, it might large than returned items.length"})
    total: number
    @ApiProperty({ description: "The returned data instance"})
    items: T[]
}