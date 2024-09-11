import { API_KEY_NAME, TAG_BOOKS } from '@/constants'
import { Book } from '@/model/Book'
import { BookCreate } from '@/model/BookCreate'
import { BookUpdate } from '@/model/BookUpdate'
import { DeleteBookOption } from '@/model/DeleteBookOption'
import { Fail } from '@/model/Fail'
import { ListBookOption } from '@/model/ListBookOption'
import { Result } from '@/model/Result'
import { Body, Controller, Delete, Get, NotImplementedException, Param, Post, Put } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger'


@ApiTags(TAG_BOOKS)
@Controller('/api/books')
@ApiSecurity(API_KEY_NAME)
@ApiResponse({ status: 400, description: 'The request is invalid or malformed.', type: Fail, example: Fail.Example })
@ApiResponse({ status: 403, description: 'You do not have the required permissions to perform this request.', type: Fail })
export class BooksController {
    constructor() { }

    @Get(':id')
    @ApiOperation({ summary: "Get a book by it't id" })
    @ApiResponse({ status: 200, type: Book, example: Book.Example })
    @ApiResponse({ status: 404, description: 'Book of the id is not found', type: Fail, example: Fail.Example })
    getBook(@Param() id: string): Book {
        throw new NotImplementedException()
    }

    @Post()
    @ApiOperation({ summary: 'Create a new book' })
    @ApiBody({
        type: BookCreate,
        description: 'The content to create',
    })
    @ApiResponse({ status: 201, description: 'The book was successfully created and returned.', type: Book, example: Book.Example })
    createBook(@Body() bookCreate: BookCreate): Book {
        throw new NotImplementedException()
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a book' })
    @ApiParam({ name: 'id', description: 'The id of the book' })
    @ApiBody({
        type: BookUpdate,
        description: 'The content to update',
    })
    @ApiResponse({ status: 200, description: 'The book was successfully updated and returned.', type: Book, example: Book.Example })
    @ApiResponse({ status: 404, description: 'Book of the id is not found', type: Fail, example: Fail.Example })
    updateBook(@Param('id') id: string, @Body() bookUpdate: BookUpdate): Book {
        throw new NotImplementedException()
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a book' })
    @ApiParam({ name: 'id', description: 'The id of the book' })
    @ApiBody({
        type: DeleteBookOption,
        description: 'The delete option',
        required: false
    })
    @ApiResponse({ status: 200, description: 'The book was successfully deleted.', type: Result, example: Result.Example })
    @ApiResponse({ status: 404, description: 'Book of the id is not found', type: Fail, example: Fail.Example })
    removeBook(@Param('id') id: string, @Body() deleteBookUpdate?: DeleteBookOption): Result {
        throw new NotImplementedException()
    }

    @Get()
    @ApiOperation({ summary: 'List books' })
    @ApiBody({
        type: ListBookOption,
        description: 'The list condition',
        required: false
    })
    @ApiResponse({ status: 200, description: 'Return books that meet the condition.', type: [Book] })
    listBook(@Body() option?: ListBookOption) {
        throw new NotImplementedException()
    }

}

