import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';
import { DogRepository } from './dog.repository';

@Module({
  controllers: [DogController],
  providers: [DogService, DogRepository],
})
export class DogModule {}
