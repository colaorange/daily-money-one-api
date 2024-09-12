import { ApiProperty } from '@nestjs/swagger'

export class DatetimeRange{
    
    @ApiProperty({ description: '', required: false})
    from?: number

    @ApiProperty({ description: '', required: false})
    to?: number
}