import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: Map<String, any>) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: String) {
    console.log(id);
  }
}
