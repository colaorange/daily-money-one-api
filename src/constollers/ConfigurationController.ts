import { TAG_BASIC } from '@/constants'
import { Configuration } from '@/model/Configuration'
import { Fail } from '@/model/Fail'
import { Controller, Get, NotImplementedException } from '@nestjs/common'
import { ApiExtraModels, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_BASIC)
@Controller('/api/configuration')
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', content: Fail.Content })
//needs ApiExtraModels for schema that are not auto included by only content
@ApiExtraModels(Fail)
@ApiExtraModels(Configuration)
export class ConfigurationController {
    constructor() { }

    @Get()
    @ApiOperation({ summary: 'Get configuration for loading client', operationId: "getConfiguration" })
    @ApiResponse({ status: 200, description: 'The client configuration', content: Configuration.Content })
    getConfiguration(): Configuration {
        throw new NotImplementedException()
    }

}

