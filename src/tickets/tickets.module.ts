import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { PrismaService } from '../prisma.service';
import { GroupService } from 'src/group/group.service';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, PrismaService, GroupService],
})
export class TicketsModule {}
