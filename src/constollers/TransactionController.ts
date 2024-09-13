import { API_KEY_NAME, TAG_TRANSACTION } from '@/constants'
import { Transaction } from '@/model/Transaction'
import { TransactionCreate } from '@/model/TransactionCreate'
import { TransactionUpdate } from '@/model/TransactionUpdate'
import { DeleteTransactionOption } from '@/model/DeleteTransactionOption'
import { Fail } from '@/model/Fail'
import { ListTransactionOption } from '@/model/ListTransactionOption'
import { Result } from '@/model/Result'
import { Body, Controller, Delete, Get, NotImplementedException, Param, Post, Put } from '@nestjs/common'
import { ApiBody, ApiExtraModels, ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'
import { PageTransactionOption } from '@/model/PageTransactionOption'
import { TransactionPagination } from '@/model/TransactionPagination'


@ApiTags(TAG_TRANSACTION)
@Controller('/api')
@ApiSecurity(API_KEY_NAME)
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', content: Fail.Content })
@ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', content: Fail.Content })
//needs ApiExtraModels for schema that are not auto included by only content
@ApiExtraModels(Fail)
@ApiExtraModels(Result)
@ApiExtraModels(Transaction)
export class TransactionController {
    constructor() { }

    @Get('transaction/:id')
    @ApiOperation({ summary: "Get a transaction by its id", operationId: "getTransaction" })
    @ApiParam({ name: 'id', description: 'The id of the transaction' })
    @ApiResponse({ status: 200, content: Transaction.Content })
    @ApiResponse({ status: 404, description: 'Transaction of the id is not found', content: Fail.Content })
    getTransaction(@Param() id: string): Transaction {
        throw new NotImplementedException()
    }

    @Post('transaction')
    @ApiOperation({ summary: 'Create a new transaction', operationId: "createTransaction" })
    @ApiBody({
        type: TransactionCreate,
        description: 'The content to create',
        schema: {
            example: TransactionCreate.Example
        }
    })
    @ApiResponse({ status: 201, description: 'The transaction was successfully created and returned.', content: Transaction.Content })
    createTransaction(@Body() transactionCreate: TransactionCreate): Transaction {
        throw new NotImplementedException()
    }

    @Put('transaction/:id')
    @ApiOperation({ summary: 'Update a transaction', operationId: "updateTransaction" })
    @ApiParam({ name: 'id', description: 'The id of the transaction' })
    @ApiBody({
        type: TransactionUpdate,
        description: 'The content to update',
        schema: {
            example: TransactionUpdate.Example
        }
    })
    @ApiResponse({ status: 200, description: 'The transaction was successfully updated and returned.', content: Transaction.Content })
    @ApiResponse({ status: 404, description: 'Transaction of the id is not found', content: Fail.Content })
    updateTransaction(@Param('id') id: string, @Body() transactionUpdate: TransactionUpdate): Transaction {
        throw new NotImplementedException()
    }

    @Delete('transaction/:id')
    @ApiOperation({ summary: 'Delete a transaction', operationId: "deleteTransaction" })
    @ApiParam({ name: 'id', description: 'The id of the transaction' })
    @ApiBody({
        type: DeleteTransactionOption,
        description: 'The delete option',
        required: false
    })
    @ApiResponse({ status: 200, description: 'The transaction was successfully deleted.', content: Result.Content })
    @ApiResponse({ status: 404, description: 'Transaction of the id is not found', content: Fail.Content })
    deleteTransaction(@Param('id') id: string, @Body() deleteTransactionUpdate?: DeleteTransactionOption): Result {
        throw new NotImplementedException()
    }

    @Get('transactions')
    @ApiOperation({ summary: 'List all transactions', operationId: "listTransactionAll" })
    @ApiResponse({ status: 200, description: 'Return all transactions.', type: [Transaction] })
    listTransactionAll(): [Transaction] {
        throw new NotImplementedException()
    }

    @Put('transactions')
    @ApiOperation({ summary: 'List transactions with a filter', operationId: "listTransaction" })
    @ApiBody({
        type: ListTransactionOption,
        description: 'The list condition',
        required: false
    })
    @ApiResponse({ status: 200, description: 'Return transactions that meet the condition.', type: [Transaction] })
    listTransaction(@Body() option?: ListTransactionOption): [Transaction] {
        throw new NotImplementedException()
    }

    @Put('transactions-count')
    @ApiOperation({ summary: 'count transactions with a filter', operationId: "countTransaction" })
    @ApiBody({
        type: ListTransactionOption,
        description: 'The count condition',
        required: false
    })
    @ApiResponse({ status: 200, description: 'Return the count that meet the condition.', type: Number })
    countTransaction(@Body() option?: ListTransactionOption): number {
        throw new NotImplementedException()
    }

    @Put('transactions-page')
    @ApiOperation({ summary: 'Path transactions with a filter', operationId: "pageTransaction" })
    @ApiBody({
        type: PageTransactionOption,
        description: 'The page condition',
        required: false
    })
    @ApiResponse({ status: 200, description: 'Return transactions page that meet the condition.', type: [TransactionPagination] })
    pageTransaction(@Body() option?: PageTransactionOption): TransactionPagination {
        throw new NotImplementedException()
    }

    @Put('transactions-delete-trash')
    @ApiOperation({ summary: 'count transactions with a filter', operationId: "deleteTransactionTrash" })
    @ApiBody({
        type: Number,
        description: 'delete trashed transaction before this datetime',
        required: false
    })
    @ApiResponse({ status: 200, description: 'Deleted trashed transaction count', type: Number })
    deleteTransactionTrash(@Body() editDatetimeBefore?: number): number {
        throw new NotImplementedException()
    }
}

