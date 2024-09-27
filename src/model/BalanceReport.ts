import { ApiExtraModels, ApiProperty, getSchemaPath } from "@nestjs/swagger";
import { Balance } from "./Balance";
import { AccountType } from "./AccountType";


//needs ApiExtraModels for schema that included in additionalProperties.#ref
@ApiExtraModels(Balance)
export class BalanceReport {

    @ApiProperty({
        description: "The account balance record of the report, the key value is the account id",
        type: 'object',
        additionalProperties: {
            $ref: getSchemaPath(Balance)
        }
    })
    accounts: Record<string, Balance>

    @ApiProperty({
        description: "The account type balance record of the report, the key value is the account type",
        type: 'object',
        additionalProperties: {
            $ref: getSchemaPath(Balance)
        }
    })
    accountTypes: Partial<Record<AccountType, Balance>>


    static Example: BalanceReport = {
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

    static Content = {
        "application/json": {
            schema: {
                $ref: getSchemaPath(BalanceReport)
            },
            example: BalanceReport.Example
        }
    }
}

