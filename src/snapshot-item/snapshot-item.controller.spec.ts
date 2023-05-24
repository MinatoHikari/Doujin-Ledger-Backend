import { Test, TestingModule } from '@nestjs/testing';
import { SnapshotItemController } from './snapshot-item.controller';
import { SnapshotItemService } from './snapshot-item.service';

describe('SnapshotItemController', () => {
  let controller: SnapshotItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnapshotItemController],
      providers: [SnapshotItemService],
    }).compile();

    controller = module.get<SnapshotItemController>(SnapshotItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
