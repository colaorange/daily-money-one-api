import { ApiProperty } from "@nestjs/swagger"
import { Pagination } from "./Pagination"
import { Transaction } from "./Transaction"


export class TransactionPagination extends Pagination<Transaction> {

    @ApiProperty({ description: "The returned transaction instance", type: [Transaction] })
    items: Transaction[]
}