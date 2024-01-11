import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatemessageDto } from '../dtos/create.message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: CreatemessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: String) {
    console.log(id);
  }
}