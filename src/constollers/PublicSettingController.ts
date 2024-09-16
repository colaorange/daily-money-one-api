import { TAG_BASIC } from '@/constants'
import { PublicSetting } from '@/model/PublicSetting'
import { Fail } from '@/model/Fail'
import { Controller, Get, NotImplementedException } from '@nestjs/common'
import { ApiExtraModels, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_BASIC)
@Controller('/api/public-setting')
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', content: Fail.Content })
//needs ApiExtraModels for schema that are not auto included by only content
@ApiExtraModels(Fail)
@ApiExtraModels(PublicSetting)
export class ConfigurationController {
    constructor() { }

    @Get()
    @ApiOperation({ summary: 'Get the public setting for loading client', operationId: "getPublicSetting" })
    @ApiResponse({ status: 200, description: 'The client configuration', content: PublicSetting.Content })
    getPublicSetting(): PublicSetting {
        throw new NotImplementedException()
    }

}

