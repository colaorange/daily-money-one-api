import { ApiProperty } from '@nestjs/swagger'

export class BookBase {

    @ApiProperty({ description: ''})
    name: string

    @ApiProperty({ description: '', required: false })
    currency?: string | null

    @ApiProperty({ description: '', required: false })
    fractionDigits?: number | null

    @ApiProperty({ description: '', required: false })
    symbol?: string | null

    @ApiProperty({ description: '', required: false })
    note?: string | null

    @ApiProperty({ description: '', required: false })
    priority?: number | null

    static Example: BookBase = {
        name: 'The Book'
    }
}
