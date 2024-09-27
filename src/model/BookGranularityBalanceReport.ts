import { ApiExtraModels, ApiProperty, getSchemaPath } from "@nestjs/swagger";
import { AccountType } from "./AccountType";
import { BalanceReport } from "./BalanceReport";
import { Book } from "./Book";

@ApiExtraModels(BalanceReport)
export class BookGranularityBalanceReport {

    @ApiProperty({ description: "The book id of the report" })
    bookId: string

    @ApiProperty({
        description: "The the report, the key value is the start time of a report, it is a string type number",
        type: 'object',
        additionalProperties: {
            $ref: getSchemaPath(BalanceReport)
        }
    })
    reports: Record<string, BalanceReport>

    static Example: BookGranularityBalanceReport = {
        bookId: 'unique-id',
        reports: {
            '1704067200000': {
                accounts: {
                    'unique-id': {
                        withdrawalsAmount: 3000,
                        depositsAmount: 4000
                    }
                },
                accountTypes: {
                    'asset': {
                        withdrawalsAmount: 3000,
                        depositsAmount: 4000
                    }
                }
            }
        }
    }

    static Content = {
        "application/json": {
            schema: {
                $ref: getSchemaPath(BookGranularityBalanceReport)
            },
            example: BookGranularityBalanceReport.Example
        }
    }
}

