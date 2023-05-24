import { Module } from '@nestjs/common';
import { TicketSnapshotService } from './ticket-snapshot.service';
import { TicketSnapshotController } from './ticket-snapshot.controller';

@Module({
  controllers: [TicketSnapshotController],
  providers: [TicketSnapshotService]
})
export class TicketSnapshotModule {}
