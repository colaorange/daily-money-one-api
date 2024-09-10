import { AppExceptionFilter } from '@/AppExceptionFilter'
import { API_KEY_NAME, HEADER_CONNECTION_PASSWORD, TAG_DAILY_MONEY_ONE } from '@/constants'
import { Fail } from '@/model/Fail'
import { Result as Result } from '@/model/Result'
import { AuthorizeService } from '@/services/AuthorizeService'
import { Body, Controller, Get, Head, Header, Headers, Post, Put, UseFilters } from '@nestjs/common'
import { ApiBody, ApiConsumes, ApiHeader, ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_DAILY_MONEY_ONE)
@Controller('/api/authroize')
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', type: Fail, example: Fail.Example })
// @ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', type: Fail })
export class AuthroizeController {
    constructor(private readonly authorizeService: AuthorizeService) { }

    @Get()
    @ApiOperation({ summary: 'validate the password' })
    @ApiSecurity(API_KEY_NAME)
    @ApiResponse({ status: 200, description: 'the given password is correct or not', type: Result, example: Result.Example })
    authroizeGet(@Headers() headers: Record<string, string>): Result {
        return this.authorizeService.authorize(headers[HEADER_CONNECTION_PASSWORD.toLowerCase()])
    }

    // @Post() , return 201 for creation
    @Put()
    @ApiOperation({ summary: 'validate the password' })
    @ApiConsumes('text/plain')
    @ApiBody({
        schema: {
            type: 'string'
        },
        description: 'the password',
    })
    @ApiResponse({ status: 200, description: 'the given password is correct or not', type: Result })
    authroizePost(@Body() password: string): Result {
        return this.authorizeService.authorize(password)
    }
}

