import { API_KEY_NAME, TAG_BASIC } from '@/constants'
import { Fail } from '@/model/Fail'
import { Preferences } from '@/model/Preferences'
import { Controller, Get, NotImplementedException } from '@nestjs/common'
import { ApiExtraModels, ApiOperation, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_BASIC)
@Controller('/api/preferences')
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', content: Fail.Content })
@ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', type: Fail })
@ApiSecurity(API_KEY_NAME)
//needs ApiExtraModels for schema that are not auto included by only content
@ApiExtraModels(Fail)
@ApiExtraModels(Preferences)
export class PreferenceController {
    constructor() { }

    @Get()
    @ApiOperation({ summary: "Get the user's preferences", operationId: "getPreference" })
    @ApiResponse({ status: 200, description: "User's Preference", content: Preferences.Content })
    getPreferences(): Preferences {
        throw new NotImplementedException()
    }

    
}

