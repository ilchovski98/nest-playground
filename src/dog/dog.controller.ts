import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('dog')
export class DogController {
  @Get()
  listDogs() {

  }

  @Post()
  createDog(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getDog(@Param('id') id: string) {
    console.log('id', id);
  }
}
