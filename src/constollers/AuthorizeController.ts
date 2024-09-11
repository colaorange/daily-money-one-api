import { API_KEY_NAME, HEADER_CONNECTION_PASSWORD, TAG_AUTHORIZATION } from '@/constants'
import { Fail } from '@/model/Fail'
import { Result } from '@/model/Result'
import { AuthorizeService } from '@/services/AuthorizeService'
import { Body, Controller, Get, Headers, Put } from '@nestjs/common'
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_AUTHORIZATION)
@Controller('/api/authroize')
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', type: Fail, content: Fail.ContentExample })
// @ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', type: Fail })
export class AuthorizeController {
    constructor(private readonly authorizeService: AuthorizeService) { }

    @Get()
    @ApiOperation({ summary: 'validate the password', operationId: "authroizeGet" })
    @ApiSecurity(API_KEY_NAME)
    @ApiResponse({ status: 200, description: 'the given password is correct or not', type: Result, content: Result.ContentExample })
    authroizeGet(@Headers() headers: Record<string, string>): Result {
        return this.authorizeService.authorize(headers[HEADER_CONNECTION_PASSWORD.toLowerCase()])
    }

    // @Post() , return 201 for creation
    @Put()
    @ApiOperation({ summary: 'validate the password', operationId: "authroize" })
    @ApiConsumes('text/plain')
    @ApiBody({
        schema: {
            type: 'string'
        },
        description: 'the password',
    })
    @ApiResponse({ status: 200, description: 'the given password is correct or not', type: Result, content: Result.ContentExample })
    authroizePost(@Body() password: string): Result {
        return this.authorizeService.authorize(password)
    }
}

