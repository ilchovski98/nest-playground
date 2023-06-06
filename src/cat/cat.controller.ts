import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('/cat')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  getOne() {
    return this.catService.getOne();
  }

  @Get('/two')
  getTwo() {
    return this.catService.getTwo();
  }
}
