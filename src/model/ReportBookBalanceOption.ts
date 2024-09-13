import { ApiProperty } from "@nestjs/swagger";
import { DatetimeRange } from "./DatetimeRange";
import { AccountType, AccountTypeRefPath } from "./AccountType";

export class ReportBookBalanceOption{

    @ApiProperty({ description: "Transfer Datetime range to include", required: false })
    transDatetimeRange?: DatetimeRange
    
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

    static Example: ReportBookBalanceOption = {
        transDatetimeRange: {
            from: 1704067200000,
            to: 1735689599000,
        },
        accountTypes: [
            AccountType.EXPENSE,
            AccountType.ASSET
        ]
    }
}