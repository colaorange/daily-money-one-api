import { ApiProperty } from "@nestjs/swagger";
import { SortBy } from "./SortBy";
import { AccountType, AccountTypeRefPath } from "./AccountType";

export class ListAccountOption {

    @ApiProperty({ description: "The book id  to include'", required: false })
    bookId?: string

    @ApiProperty({ description: "The account name path (partial of account name)' to filter", required: false })
    namePath?: string

    @ApiProperty({
        description: "Account types to include",
        required: false,
        isArray: true,
        allOf: [{ $ref: AccountTypeRefPath }]
    })
    types?: AccountType[]

    @ApiProperty({
        description: "Include hidden accounts. If not set or set to false, hidden accounts will not be displayed in the list. Set 'hiddenOnly' will show only hidden account",
        required: false,
        oneOf: [{ type: 'string', enum: ['hiddenOnly'] }, { type: 'boolean' }]
    })
    includeHidden?: boolean | 'hiddenOnly'

    @ApiProperty({ description: "Sort by a field, supports filed: 'createDatetime' | 'priority' | 'name''", required: false })
    sortBy?: SortBy

    @ApiProperty({
        description: "Account ids to include",
        required: false,
        type: ['string']
    })
    ids?: string[]
}