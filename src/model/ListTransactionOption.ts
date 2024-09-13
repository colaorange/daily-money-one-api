import { ApiProperty } from "@nestjs/swagger";
import { SortBy } from "./SortBy";
import { AccountType, AccountTypeRefPath } from "./AccountType";
import { DatetimeRange } from "./DatetimeRange";
import { ValueRange } from "./ValueRange";

export class ListTransactionOption {

    @ApiProperty({ description: "The book id to include", required: false })
    bookId?: string

    @ApiProperty({ description: "The note like to include", required: false })
    noteLike?: string

    @ApiProperty({ description: "The return limit", required: false })
    limit?: number

    @ApiProperty({ description: "The transfer datetime range to include", required: false })
    transDatetimeRange?: DatetimeRange

    @ApiProperty({ description: "The transfer value range to include", required: false })
    valueRange?: ValueRange

    @ApiProperty({
        description: "Account ids to include",
        required: false,
        type: ['string']
    })
    accountIds?: string[]


    @ApiProperty({
        description: "Account types to include",
        required: false,
        isArray: true,
        allOf: [{ $ref: AccountTypeRefPath }]
    })
    accountTypes?: AccountType[]

    @ApiProperty({
        description: "Include trash transaction. If not set or set to false, trash transaction will not be displayed in the list. Set 'trashOnly' will show only trash transaction",
        required: false,
        oneOf: [{ type: 'string', enum: ['trashOnly'] }, { type: 'boolean' }]
    })
    includeTrash?: boolean | 'hiddenOnly'

    @ApiProperty({ description: "Sort by a field, supports filed: 'createDatetime' | 'editDatetime' | 'transDatetime'", required: false })
    sortBy?: SortBy
}