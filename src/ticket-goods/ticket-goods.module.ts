import { Module } from '@nestjs/common';
import { TicketGoodsService } from './ticket-goods.service';
import { TicketGoodsController } from './ticket-goods.controller';

@Module({
  controllers: [TicketGoodsController],
  providers: [TicketGoodsService]
})
export class TicketGoodsModule {}
