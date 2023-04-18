import { Module } from '@nestjs/common';
import { TicketGoodsService } from './ticket-goods.service';
import { TicketGoodsController } from './ticket-goods.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TicketGoodsController],
  providers: [TicketGoodsService, PrismaService],
})
export class TicketGoodsModule {}
