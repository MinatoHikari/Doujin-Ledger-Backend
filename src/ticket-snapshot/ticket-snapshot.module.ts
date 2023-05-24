import { Module } from '@nestjs/common';
import { TicketSnapshotService } from './ticket-snapshot.service';
import { TicketSnapshotController } from './ticket-snapshot.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TicketSnapshotController],
  providers: [TicketSnapshotService, PrismaService],
})
export class TicketSnapshotModule {}
