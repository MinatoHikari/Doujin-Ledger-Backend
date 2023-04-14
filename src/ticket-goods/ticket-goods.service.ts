import { Injectable } from '@nestjs/common';
import { CreateTicketGoodDto } from './dto/create-ticket-good.dto';
import { UpdateTicketGoodDto } from './dto/update-ticket-good.dto';

@Injectable()
export class TicketGoodsService {
  create(createTicketGoodDto: CreateTicketGoodDto) {
    return 'This action adds a new ticketGood';
  }

  findAll() {
    return `This action returns all ticketGoods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketGood`;
  }

  update(id: number, updateTicketGoodDto: UpdateTicketGoodDto) {
    return `This action updates a #${id} ticketGood`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketGood`;
  }
}
