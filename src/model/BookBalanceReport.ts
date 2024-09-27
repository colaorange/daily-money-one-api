import { ApiProperty, getSchemaPath } from "@nestjs/swagger";
import { BalanceReport } from "./BalanceReport";

export class BookBalanceReport extends BalanceReport {

    @ApiProperty({ description: "The book id of the report" })
    bookId: string

    static Example: BookBalanceReport = {
        bookId: 'unique-id',
        ...BalanceReport.Example
    }

    static Content = {
        "application/json": {
            schema: {
                $ref: getSchemaPath(BookBalanceReport)
            },
            example: BookBalanceReport.Example
        }
    }
}

