import { ApiProperty, getSchemaPath } from '@nestjs/swagger'

export class Profile{

    @ApiProperty({ description: '', required: false })
    email?: string

    @ApiProperty({ description: '', required: false })
    name?: string

    @ApiProperty({ description: '', required: false })
    photo?: string

}