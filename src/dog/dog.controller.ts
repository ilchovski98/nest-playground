import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateDogDto } from './dtos/create-dog.dto';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(public dogService: DogService) {}

  @Get()
  listDogs() {
    return this.dogService.findAll();
  }

  @Post()
  createDog(@Body() body: CreateDogDto) {
    return this.dogService.create(body.name);
  }

  @Get('/:id')
  async getDog(@Param('id') id: string) {
    const dog = await this.dogService.findOne(id);

    if (!dog) {
      throw new NotFoundException('message not found');
    }

    return dog;
  }
}
