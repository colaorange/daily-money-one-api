import { API_KEY_NAME, TAG_ACCOUNT } from '@/constants'
import { Account } from '@/model/Account'
import { AccountCreate } from '@/model/AccountCreate'
import { AccountUpdate } from '@/model/AccountUpdate'
import { DeleteAccountOption } from '@/model/DeleteAccountOption'
import { Fail } from '@/model/Fail'
import { ListAccountOption } from '@/model/ListAccountOption'
import { Result } from '@/model/Result'
import { Body, Controller, Delete, Get, NotImplementedException, Param, Post, Put } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_ACCOUNT)
@Controller('/api')
@ApiSecurity(API_KEY_NAME)
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', type: Fail, content: Fail.ContentExample })
@ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', type: Fail, content: Fail.ContentExample })
export class AccountController {
    constructor() { }

    @Get('account/:id')
    @ApiOperation({ summary: "Get a account by its id", operationId: "getAccount" })
    @ApiParam({ name: 'id', description: 'The id of the account' })
    @ApiResponse({ status: 200, type: Account, content: Account.ContentExample })
    @ApiResponse({ status: 404, description: 'Account of the id is not found', type: Fail, content: Fail.ContentExample })
    getAccount(@Param() id: string): Account {
        throw new NotImplementedException()
    }

    @Post('account')
    @ApiOperation({ summary: 'Create a new account', operationId: "createAccount" })
    @ApiBody({
        type: AccountCreate,
        description: 'The content to create',
        schema: {
            example: AccountCreate.Example
        }
    })
    @ApiResponse({ status: 201, description: 'The account was successfully created and returned.', type: Account, content: Account.ContentExample })
    createAccount(@Body() accountCreate: AccountCreate): Account {
        throw new NotImplementedException()
    }

    @Put('account/:id')
    @ApiOperation({ summary: 'Update a account', operationId: "updateAccount" })
    @ApiParam({ name: 'id', description: 'The id of the account' })
    @ApiBody({
        type: AccountUpdate,
        description: 'The content to update',
        schema: {
            example: AccountUpdate.Example
        }
    })
    @ApiResponse({ status: 200, description: 'The account was successfully updated and returned.', type: Account, content: Account.ContentExample })
    @ApiResponse({ status: 404, description: 'Account of the id is not found', type: Fail, content: Fail.ContentExample })
    updateAccount(@Param('id') id: string, @Body() accountUpdate: AccountUpdate): Account {
        throw new NotImplementedException()
    }

    @Delete('account/:id')
    @ApiOperation({ summary: 'Delete a account', operationId: "deleteAccount" })
    @ApiParam({ name: 'id', description: 'The id of the account' })
    @ApiBody({
        type: DeleteAccountOption,
        description: 'The delete option',
        required: false
    })
    @ApiResponse({ status: 200, description: 'The account was successfully deleted.', type: Result, content: Result.ContentExample })
    @ApiResponse({ status: 404, description: 'Account of the id is not found', type: Fail, content: Fail.ContentExample })
    deleteAccount(@Param('id') id: string, @Body() deleteAccountUpdate?: DeleteAccountOption): Result {
        throw new NotImplementedException()
    }

    @Get('accounts')
    @ApiOperation({ summary: 'List all accounts', operationId: "listAccountAll" })
    @ApiResponse({ status: 200, description: 'Return all accounts.', type: [Account] })
    listAccountAll() {
        throw new NotImplementedException()
    }

    @Put('accounts')
    @ApiOperation({ summary: 'List accounts with a filter', operationId: "listAccount" })
    @ApiBody({
        type: ListAccountOption,
        description: 'The list condition',
        required: false
    })
    @ApiResponse({ status: 200, description: 'Return accounts that meet the condition.', type: [Account] })
    listAccount(@Body() option?: ListAccountOption) {
        throw new NotImplementedException()
    }

}

