import { API_KEY_NAME, TAG_BOOK, TAG_REPORT } from '@/constants'
import { BalanceReport } from '@/model/BalanceReport'
import { Book } from '@/model/Book'
import { BookCreate } from '@/model/BookCreate'
import { BookUpdate } from '@/model/BookUpdate'
import { DeleteBookOption } from '@/model/DeleteBookOption'
import { Fail } from '@/model/Fail'
import { ListBookOption } from '@/model/ListBookOption'
import { ReportBalanceOption } from '@/model/ReportBalanceOption'
import { Result } from '@/model/Result'
import { Body, Controller, Delete, Get, NotImplementedException, Param, Post, Put } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_REPORT)
@Controller('/api')
@ApiSecurity(API_KEY_NAME)
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', type: Fail, content: Fail.ContentExample })
@ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', type: Fail, content: Fail.ContentExample })
export class ReportController {
    constructor() { }

    @Put('report/balance/book/:id/')
    @ApiOperation({ summary: 'Report balance of a book', operationId: "reportBalance" })
    @ApiParam({ name: 'id', description: 'The id of the book' })
    @ApiBody({
        type: ReportBalanceOption,
        description: 'The optional condition for querying the blanace report',
        schema: {
            example: ReportBalanceOption.Example
        }
    })
    @ApiResponse({ status: 200, description: 'The book was successfully updated and returned.', type: BalanceReport, content: BalanceReport.ContentExample })
    @ApiResponse({ status: 404, description: 'Book of the id is not found', type: Fail, content: Fail.ContentExample })
    reportBalance(@Param('id') id: string, @Body() option?: ReportBalanceOption): BalanceReport {
        throw new NotImplementedException()
    }
}

