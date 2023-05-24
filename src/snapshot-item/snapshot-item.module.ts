import { Module } from '@nestjs/common';
import { SnapshotItemService } from './snapshot-item.service';
import { SnapshotItemController } from './snapshot-item.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [SnapshotItemController],
  providers: [SnapshotItemService, PrismaService],
})
export class SnapshotItemModule {}
