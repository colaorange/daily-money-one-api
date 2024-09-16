import { API_KEY_NAME, HEADER_CONNECTION_TOKEN, TAG_BASIC } from '@/constants'
import { Fail } from '@/model/Fail'
import { Result } from '@/model/Result'
import { AuthorizeService } from '@/services/AuthorizeService'
import { Body, Controller, Get, Headers, Put } from '@nestjs/common'
import { ApiBody, ApiConsumes, ApiExtraModels, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_BASIC)
@Controller('/api/authorize')
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', content: Fail.Content })
// @ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', type: Fail })
//needs ApiExtraModels for schema that are not auto included by only content
@ApiExtraModels(Fail)
@ApiExtraModels(Result)
export class AuthorizeController {
    constructor(private readonly authorizeService: AuthorizeService) { }

    @Get()
    @ApiOperation({ summary: 'Validate the token', operationId: "authorizeGet" })
    @ApiSecurity(API_KEY_NAME)
    @ApiResponse({ status: 200, description: 'the given token is correct or not', content: Result.Content })
    authorizeGet(@Headers() headers: Record<string, string>): Result {
        return this.authorizeService.authorize(headers[HEADER_CONNECTION_TOKEN.toLowerCase()])
    }

    // @Post() , return 201 for creation
    @Put()
    @ApiOperation({ summary: 'Validate the token', operationId: "authorize" })
    @ApiConsumes('text/plain')
    @ApiBody({
        schema: {
            type: 'string'
        },
        description: 'the token',
    })
    @ApiResponse({ status: 200, description: 'The given token is correct or not', content: Result.Content })
    authorizePost(@Body() connectionToken: string): Result {
        return this.authorizeService.authorize(connectionToken)
    }
}

