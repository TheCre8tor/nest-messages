interface IMessagesService {
  findOne(id: string): Promise<JSON>;

  findAll(): Promise<JSON>;

  create(content: string): void;
}
