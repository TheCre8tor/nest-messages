import { MessageRepository } from '../repository/messages.repository';

export class MessagesService implements IMessageService {
  repository: MessageRepository;

  constructor() {
    this.repository = new MessageRepository();
  }

  async findOne(id: string): Promise<JSON> {
    return await this.repository.findOne(id);
  }

  async findAll(): Promise<JSON> {
    return await this.repository.findAll();
  }

  async create(content: string) {
    await this.repository.create(content);
  }
}
