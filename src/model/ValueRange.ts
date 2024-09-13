import { ApiProperty } from '@nestjs/swagger'

export class ValueRange{
    
    @ApiProperty({ description: '', required: false})
    min?: number

    @ApiProperty({ description: '', required: false})
    max?: number
}