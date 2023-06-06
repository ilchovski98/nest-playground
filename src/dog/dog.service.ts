import { Injectable } from '@nestjs/common';
import { DogRepository } from './dog.repository';

@Injectable()
export class DogService {
  constructor(public dogRepository: DogRepository) {}

  findOne(id: string) {
    return this.dogRepository.findOne(id);
  }

  findAll() {
    return this.dogRepository.findAll();
  }

  create(name: string) {
    return this.dogRepository.create(name);
  }
}
