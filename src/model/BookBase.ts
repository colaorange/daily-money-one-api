import { ApiProperty } from '@nestjs/swagger'

export class BookBase {

    @ApiProperty({ description: '', required: false, nullable: true })
    currency?: string | null

    @ApiProperty({ description: '', required: false, nullable: true  })
    fractionDigits?: number | null

    @ApiProperty({ description: '', required: false, nullable: true  })
    symbol?: string | null

    @ApiProperty({ description: '', required: false, nullable: true  })
    note?: string | null

    @ApiProperty({ description: '', required: false, nullable: true  })
    priority?: number | null
    
}
