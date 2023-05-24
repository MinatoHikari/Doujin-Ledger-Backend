import { Test, TestingModule } from '@nestjs/testing';
import { TicketSnapshotController } from './ticket-snapshot.controller';
import { TicketSnapshotService } from './ticket-snapshot.service';

describe('TicketSnapshotController', () => {
  let controller: TicketSnapshotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketSnapshotController],
      providers: [TicketSnapshotService],
    }).compile();

    controller = module.get<TicketSnapshotController>(TicketSnapshotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
