import { Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from '@/model/Pet';

@Injectable()
export class PetsService {
    private pets: Pet[] = [];

    findAll(): Pet[] {
        return this.pets;
    }

    findOne(id: number): Pet {
        const pet = this.pets.find(pet => pet.id === id);
        if (!pet) {
            throw new NotFoundException(`Pet with ID ${id} not found`);
        }
        return pet;
    }

    create(Pet: Pet): Pet {
        const newPet = { ...Pet, id: Date.now() };
        this.pets.push(newPet);
        return newPet;
    }

    update(id: number, Pet: Pet): Pet {
        const petIndex = this.pets.findIndex(pet => pet.id === id);
        if (petIndex === -1) {
            throw new NotFoundException(`Pet with ID ${id} not found`);
        }
        this.pets[petIndex] = { ...Pet, id };
        return this.pets[petIndex];
    }

    remove(id: number): void {
        const petIndex = this.pets.findIndex(pet => pet.id === id);
        if (petIndex === -1) {
            throw new NotFoundException(`Pet with ID ${id} not found`);
        }
        this.pets.splice(petIndex, 1);
    }
}