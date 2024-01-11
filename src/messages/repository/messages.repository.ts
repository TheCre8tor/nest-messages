import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository implements IMessageRepository {
  storagePath: string = 'src/messages/repository/messages.json';

  async findOne(id: string): Promise<JSON> {
    const contents = await readFile(this.storagePath, 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll(): Promise<JSON> {
    const contents = await readFile(this.storagePath, 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const contents = await readFile(this.storagePath, 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile(this.storagePath, JSON.stringify(messages));
  }
}
