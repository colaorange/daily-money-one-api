import { API_KEY_NAME, TAG_BOOK } from '@/constants'
import { Book } from '@/model/Book'
import { BookCreate } from '@/model/BookCreate'
import { BookUpdate } from '@/model/BookUpdate'
import { DeleteBookOption } from '@/model/DeleteBookOption'
import { Fail } from '@/model/Fail'
import { ListBookOption } from '@/model/ListBookOption'
import { Result } from '@/model/Result'
import { Body, Controller, Delete, Get, NotImplementedException, Param, Post, Put } from '@nestjs/common'
import { ApiBody, ApiExtraModels, ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_BOOK)
@Controller('/api')
@ApiSecurity(API_KEY_NAME)
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', content: Fail.Content })
@ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', content: Fail.Content })
//needs ApiExtraModels for schema that are not auto included by only content
@ApiExtraModels(Fail)
@ApiExtraModels(Result)
export class BookController {
    constructor() { }

    @Get('book/:id')
    @ApiOperation({ summary: "Get a book by its id", operationId: "getBook" })
    @ApiParam({ name: 'id', description: 'The id of the book' })
    @ApiResponse({ status: 200, content: Book.Content })
    @ApiResponse({ status: 404, description: 'Book of the id is not found', content: Fail.Content })
    getBook(@Param() id: string): Book {
        throw new NotImplementedException()
    }

    @Post('book')
    @ApiOperation({ summary: 'Create a new book', operationId: "createBook" })
    @ApiBody({
        type: BookCreate,
        description: 'The content to create',
        schema: {
            example: BookCreate.Example
        }
    })
    @ApiResponse({ status: 201, description: 'The book was successfully created and returned.', content: Book.Content })
    createBook(@Body() bookCreate: BookCreate): Book {
        throw new NotImplementedException()
    }

    @Put('book/:id')
    @ApiOperation({ summary: 'Update a book', operationId: "updateBook" })
    @ApiParam({ name: 'id', description: 'The id of the book' })
    @ApiBody({
        type: BookUpdate,
        description: 'The content to update',
        schema: {
            example: BookUpdate.Example
        }
    })
    @ApiResponse({ status: 200, description: 'The book was successfully updated and returned.', content: Book.Content })
    @ApiResponse({ status: 404, description: 'Book of the id is not found', content: Fail.Content })
    updateBook(@Param('id') id: string, @Body() bookUpdate: BookUpdate): Book {
        throw new NotImplementedException()
    }

    @Delete('book/:id')
    @ApiOperation({ summary: 'Delete a book', operationId: "deleteBook" })
    @ApiParam({ name: 'id', description: 'The id of the book' })
    @ApiBody({
        type: DeleteBookOption,
        description: 'The delete option',
        required: false
    })
    @ApiResponse({ status: 200, description: 'The book was successfully deleted.', content: Result.Content })
    @ApiResponse({ status: 404, description: 'Book of the id is not found', content: Fail.Content })
    deleteBook(@Param('id') id: string, @Body() deleteBookUpdate?: DeleteBookOption): Result {
        throw new NotImplementedException()
    }

    @Get('books')
    @ApiOperation({ summary: 'List all books', operationId: "listBookAll" })
    @ApiResponse({ status: 200, description: 'Return all books.', type: [Book] })
    listBookAll(): [Book] {
        throw new NotImplementedException()
    }

    @Put('books')
    @ApiOperation({ summary: 'List books with a filter', operationId: "listBook" })
    @ApiBody({
        type: ListBookOption,
        description: 'The list condition',
        required: false
    })
    @ApiResponse({ status: 200, description: 'Return books that meet the condition.', type: [Book] })
    listBook(@Body() option?: ListBookOption): [Book] {
        throw new NotImplementedException()
    }

}

