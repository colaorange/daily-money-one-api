import { TAG_DEMO } from '@/constants';
import { Pet } from '@/model/Pet';
import { PetsService } from '@/services/PetsService';
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';


@ApiTags(TAG_DEMO)
@Controller('/api/pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @Get()
    @ApiOperation({ summary: 'Get all pets' })
    @ApiResponse({ status: 200, description: 'Return all pets.', type: [Pet] })
    findAll() {
        return this.petsService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a pet by ID' })
    @ApiParam({ name: 'id', description: 'The ID of the pet', example: 1 })
    @ApiResponse({ status: 200, description: 'Return the pet with the given ID.', type: Pet })
    findOne(@Param('id') id: number) {
        return this.petsService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new pet' })
    @ApiResponse({ status: 201, description: 'The pet has been successfully created.', type: Pet })
    create(@Body() Pet: Pet) {
        return this.petsService.create(Pet);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a pet' })
    @ApiParam({ name: 'id', description: 'The ID of the pet', example: 1 })
    @ApiResponse({ status: 200, description: 'The pet has been successfully updated.', type: Pet })
    update(@Param('id') id: number, @Body() Pet: Pet) {
        return this.petsService.update(id, Pet);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a pet' })
    @ApiParam({ name: 'id', description: 'The ID of the pet', example: 1 })
    @ApiResponse({ status: 200, description: 'The pet has been successfully deleted.' })
    remove(@Param('id') id: number) {
        return this.petsService.remove(id);
    }
}