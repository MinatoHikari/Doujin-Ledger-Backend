import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketGoodsService } from './ticket-goods.service';
import { CreateTicketGoodDto } from './dto/create-ticket-good.dto';
import { UpdateTicketGoodDto } from './dto/update-ticket-good.dto';

@Controller('ticket-goods')
export class TicketGoodsController {
  constructor(private readonly ticketGoodsService: TicketGoodsService) {}

  @Post()
  create(@Body() createTicketGoodDto: CreateTicketGoodDto) {
    return this.ticketGoodsService.create(createTicketGoodDto);
  }

  @Get()
  findAll() {
    return this.ticketGoodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketGoodsService.findOne(+id);
  }

  @Post(':id')
  update(
    @Param('id') id: string,
    @Body() updateTicketGoodDto: UpdateTicketGoodDto,
  ) {
    return this.ticketGoodsService.update(+id, updateTicketGoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketGoodsService.remove(+id);
  }
}
