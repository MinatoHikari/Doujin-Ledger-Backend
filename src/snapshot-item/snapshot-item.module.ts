import { Module } from '@nestjs/common';
import { SnapshotItemService } from './snapshot-item.service';
import { SnapshotItemController } from './snapshot-item.controller';

@Module({
  controllers: [SnapshotItemController],
  providers: [SnapshotItemService]
})
export class SnapshotItemModule {}
