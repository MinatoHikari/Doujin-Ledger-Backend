import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';
import { PrismaService } from 'src/prisma.service';
import { GroupService } from 'src/group/group.service';

@Module({
  controllers: [GoodsController],
  providers: [GoodsService, PrismaService, GroupService],
})
export class GoodsModule {}
