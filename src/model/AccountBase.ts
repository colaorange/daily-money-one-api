import { ApiProperty } from '@nestjs/swagger'

export class AccountBase {

    @ApiProperty({ description: '', required: false, nullable: true  })
    note?: string | null

    @ApiProperty({ description: '', required: false, nullable: true  })
    priority?: number | null

    @ApiProperty({ description: '', required: false, nullable: true  })
    hidden?: boolean | null
    
}
