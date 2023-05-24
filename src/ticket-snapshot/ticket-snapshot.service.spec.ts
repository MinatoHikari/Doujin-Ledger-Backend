import { Test, TestingModule } from '@nestjs/testing';
import { TicketSnapshotService } from './ticket-snapshot.service';

describe('TicketSnapshotService', () => {
  let service: TicketSnapshotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketSnapshotService],
    }).compile();

    service = module.get<TicketSnapshotService>(TicketSnapshotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
