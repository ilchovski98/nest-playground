import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getOne() {
    return 'cat';
  }

  getTwo() {
    return '2cat';
  }
}
