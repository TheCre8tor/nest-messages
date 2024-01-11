import { Injectable } from '@nestjs/common';
import { MessageRepository } from '../repository/messages.repository';

@Injectable()
export class MessagesService implements IMessagesService {
  repository: MessageRepository;

  constructor(repository: MessageRepository) {
    this.repository = repository;
  }

  async findOne(id: string): Promise<JSON> {
    return await this.repository.findOne(id);
  }

  async findAll(): Promise<JSON> {
    return await this.repository.findAll();
  }

  async create(content: string) {
    this.repository.create(content);
  }
}
