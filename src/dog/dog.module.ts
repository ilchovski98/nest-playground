import { Module } from '@nestjs/common';
import { DogController } from './dog.controller';

@Module({
  controllers: [DogController],
})
export class DogModule {}
