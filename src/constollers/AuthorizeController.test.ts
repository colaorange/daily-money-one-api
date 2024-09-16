import { Test, TestingModule } from '@nestjs/testing'

import { AuthorizeService } from '@/services/AuthorizeService'
import { AuthorizeController } from './AuthorizeController'

describe('AuthorizeController', () => {
    let authorizeController: AuthorizeController

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AuthorizeController],
            providers: [AuthorizeService],
        }).compile()

        authorizeController = app.get<AuthorizeController>(AuthorizeController)
    })

    describe('root', () => {
        it('should return "OK abc"', () => {
            const r = authorizeController.authorizeGet({ 'connection-token': 'abc' })
            expect(r.message).toBe("OK abc")
        })
        it('should return "OK def"', () => {
            const r = authorizeController.authorizePost('def')
            expect(r.message).toBe("OK def")
        })
    })
})
