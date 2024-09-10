import { Controller, Get } from '@nestjs/common'
import { HelloService } from '@/services/HelloService'
import { ApiTags } from '@nestjs/swagger'
import { TAG_DEMO } from '@/constants'

@ApiTags(TAG_DEMO)
@Controller('/api/hello')
export class HelloController {
    constructor(private readonly hellpService: HelloService) {}

    @Get()
    getHello(): string {
        return this.hellpService.getHello()
    }
}

