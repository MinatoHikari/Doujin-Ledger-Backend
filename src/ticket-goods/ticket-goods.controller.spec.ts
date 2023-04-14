import { Test, TestingModule } from '@nestjs/testing';
import { TicketGoodsController } from './ticket-goods.controller';
import { TicketGoodsService } from './ticket-goods.service';

describe('TicketGoodsController', () => {
  let controller: TicketGoodsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketGoodsController],
      providers: [TicketGoodsService],
    }).compile();

    controller = module.get<TicketGoodsController>(TicketGoodsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
