import { ApiProperty } from "@nestjs/swagger";
import { ListTransactionOption } from "./ListTransactionOption";

export class PageTransactionOption extends ListTransactionOption{

    @ApiProperty({ description: "The start index to query", required: false })
    start?: number

}