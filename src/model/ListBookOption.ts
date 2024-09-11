import { ApiProperty } from "@nestjs/swagger";
import { SortBy } from "./SortBy";

export class ListBookOption {

    @ApiProperty({ description: "Sort by a field, supports filed: 'createDatetime' | 'priority' | 'name'", required: false })
    sortBy?: SortBy
}