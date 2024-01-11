import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreatemessageDto } from '../dtos/create.message.dto';
import { MessagesService } from '../service/messages.service';

@Controller('messages')
export class MessagesController {
  service: MessagesService;

  constructor(service: MessagesService) {
    this.service = service;
  }

  @Get()
  listMessages() {
    return this.service.findAll();
  }

  @Post()
  createMessage(@Body() body: CreatemessageDto) {
    this.service.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.service.findOne(id);

    if (!message) {
      throw new NotFoundException(`'message with an id ${id} not found'`);
    }

    return message;
  }
}
