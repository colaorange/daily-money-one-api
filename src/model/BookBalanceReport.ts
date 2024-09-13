import { ApiExtraModels, ApiProperty, getSchemaPath } from "@nestjs/swagger";
import { AccountBalance } from "./AccountBalance"
import { AccountType } from "./AccountType"
import { AccountTypeBalance } from "./AccoutTypeBalance"
import { Book } from "./Book"


//needs ApiExtraModels for schema that included in additionalProperties.#ref
@ApiExtraModels(AccountTypeBalance)
@ApiExtraModels(AccountBalance)
export class BookBalanceReport {

    @ApiProperty({ description: "The book instance of the report" })
    book: Book

    @ApiProperty({
        description: "The account balance record of the report, the key value is the account id",
        type: 'object',
        additionalProperties: {
            $ref: getSchemaPath(AccountBalance)
        }
    })
    accounts: Record<string, AccountBalance>

    @ApiProperty({
        description: "The account type balance record of the report, the key value is the account type",
        type: 'object',
        additionalProperties: {
            $ref: getSchemaPath(AccountTypeBalance)
        }
    })
    accountTypes: Partial<Record<AccountType, AccountTypeBalance>>


    static Example: BookBalanceReport = {
        book: {
            id: 'unique-id',
            name: 'The Book'
        },
        accounts: {
            'unique-id': {
                account: {
                    id: 'unique-id',
                    bookId: 'unique-id',
                    name: 'The Account',
                    type: AccountType.ASSET,
                },
                withdrawalsAmount: 3000,
                depositsAmount: 4000
            }
        },
        accountTypes: {
            'asset': {
                type: AccountType.ASSET,
                withdrawalsAmount: 3000,
                depositsAmount: 4000
            }
        }
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

