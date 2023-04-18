import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoodsModule } from './goods/goods.module';
import { TicketsModule } from './tickets/tickets.module';
import { GroupModule } from './group/group.module';
import { TagModule } from './tag/tag.module';
import { TicketGoodsModule } from './ticket-goods/ticket-goods.module';

@Module({
  imports: [GoodsModule, TicketsModule, GroupModule, TagModule, TicketGoodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}