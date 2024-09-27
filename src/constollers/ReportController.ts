import { API_KEY_NAME, TAG_REPORT } from '@/constants'
import { BookBalanceReport } from '@/model/BookBalanceReport'
import { BookGranularityBalanceReport } from '@/model/BookGranularityBalanceReport'
import { Fail } from '@/model/Fail'
import { ReportBookBalanceOption } from '@/model/ReportBookBalanceOption'
import { ReportBookGranularityBalanceOption } from '@/model/ReportBookGranularityBalanceOption'
import { Body, Controller, NotImplementedException, Param, Put } from '@nestjs/common'
import { ApiBody, ApiExtraModels, ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_REPORT)
@Controller('/api')
@ApiSecurity(API_KEY_NAME)
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', content: Fail.Content })
@ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', content: Fail.Content })
//needs ApiExtraModels for schema that are not auto included by only content
@ApiExtraModels(Fail)
@ApiExtraModels(BookBalanceReport)
@ApiExtraModels(BookGranularityBalanceReport)
export class ReportController {
    constructor() { }

    @Put('report/book-balance/:id')
    @ApiOperation({ summary: 'Report balance of a book', operationId: "reportBookBalance" })
    @ApiParam({ name: 'id', description: 'The id of the book' })
    @ApiBody({
        type: ReportBookBalanceOption,
        description: 'The optional condition for querying the blanace report',
        schema: {
            example: ReportBookBalanceOption.Example
        }
    })
    @ApiResponse({ status: 200, description: 'The book was successfully updated and returned.', content: BookBalanceReport.Content })
    @ApiResponse({ status: 404, description: 'Book of the id is not found', content: Fail.Content })
    reportBookBalance(@Param('id') id: string, @Body() option?: ReportBookBalanceOption): BookBalanceReport {
        throw new NotImplementedException()
    }

    @Put('report/book-granularity-balance/:id')
    @ApiOperation({ summary: 'Report granularity balance of a book', operationId: "reportBookGranularityBalance" })
    @ApiParam({ name: 'id', description: 'The id of the book' })
    @ApiBody({
        type: ReportBookGranularityBalanceOption,
        description: 'The optional condition for querying the blanace report',
        schema: {
            example: ReportBookGranularityBalanceOption.Example
        }
    })
    @ApiResponse({ status: 200, description: 'The book was successfully updated and returned.', content: BookGranularityBalanceReport.Content })
    @ApiResponse({ status: 404, description: 'Book of the id is not found', content: Fail.Content })
    reportBookGranularityBalance(@Param('id') id: string, @Body() option?: ReportBookGranularityBalanceOption): BookGranularityBalanceReport {
        throw new NotImplementedException()
    }
}

