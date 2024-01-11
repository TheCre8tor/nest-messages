import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  async findOne(id: string): Promise<JSON> {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll(): Promise<JSON> {
    const contents = await readFile('messages.json', 'utf8');
    return JSON.parse(contents);
  }

  async create(message: string) {}
}
