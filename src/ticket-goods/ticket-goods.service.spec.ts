import { Test, TestingModule } from '@nestjs/testing';
import { TicketGoodsService } from './ticket-goods.service';

describe('TicketGoodsService', () => {
  let service: TicketGoodsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketGoodsService],
    }).compile();

    service = module.get<TicketGoodsService>(TicketGoodsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
