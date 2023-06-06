import { DogRepository } from './dog.repository';

export class DogService {
  dogRepository: DogRepository;

  constructor() {
    this.dogRepository = new DogRepository();
  }

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
