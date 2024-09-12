import { ApiProperty } from '@nestjs/swagger'

export class DatetimeRange{
    
    @ApiProperty({ description: '', required: false})
    min?: number

    @ApiProperty({ description: '', required: false})
    max?: number
}