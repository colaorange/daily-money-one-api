import { API_KEY_NAME, TAG_BASIC } from '@/constants'
import { Fail } from '@/model/Fail'
import { Preferences } from '@/model/Preferences'
import { Result } from '@/model/Result'
import { Controller, Get, NotImplementedException } from '@nestjs/common'
import { ApiExtraModels, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_BASIC)
@Controller('/api/watch-ads')
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', content: Fail.Content })
@ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', type: Fail })
@ApiSecurity(API_KEY_NAME)
//needs ApiExtraModels for schema that are not auto included by only content
@ApiExtraModels(Fail)
export class WatchAdsController {
    constructor() { }

    @Get()
    @ApiOperation({ summary: "watch ads on device", operationId: "watchAds" })
    @ApiResponse({ status: 200, description: "", content: Result.Content })
    watchAds(): Result {
        throw new NotImplementedException()
    }

    
}

