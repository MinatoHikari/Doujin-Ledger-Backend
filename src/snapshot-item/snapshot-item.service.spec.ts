import { Test, TestingModule } from '@nestjs/testing';
import { SnapshotItemService } from './snapshot-item.service';

describe('SnapshotItemService', () => {
  let service: SnapshotItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnapshotItemService],
    }).compile();

    service = module.get<SnapshotItemService>(SnapshotItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
