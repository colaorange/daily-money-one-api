import { ApiProperty } from '@nestjs/swagger';

export class Pet {
    @ApiProperty({ example: 1, description: 'The unique ID of the pet' })
    id: number;

    @ApiProperty({ example: 'Fluffy', description: 'The name of the pet' })
    name: string;

    @ApiProperty({ example: 'dog', description: 'The category of the pet' })
    category: string;

    @ApiProperty({ enum: ['available', 'pending', 'sold'], description: 'The status of the pet' })
    status: 'available' | 'pending' | 'sold';
}