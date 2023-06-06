import { readFile, writeFile } from 'fs/promises';

export class DogRepository {
  async findOne(id: string) {
    const contents = await readFile('src/dog/dogs.json', 'utf8');
    const dogs = JSON.parse(contents);

    return dogs[id];
  }

  async findAll() {
    const contents = await readFile('src/dog/dogs.json', 'utf8');
    const dogs = JSON.parse(contents);

    return dogs;
  }

  async create(name: string) {
    const contents = await readFile('src/dog/dogs.json', 'utf8');
    const dogs = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    dogs[id] = { name, id };

    await writeFile('src/dog/dogs.json', JSON.stringify(dogs));
  }
}
