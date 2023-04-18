import { Injectable } from '@nestjs/common';
import { CreateTicketGoodDto } from './dto/create-ticket-good.dto';
import { UpdateTicketGoodDto } from './dto/update-ticket-good.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TicketGoodsService {
  constructor(private prisma: PrismaService) {}

  create(createTicketGoodDto: CreateTicketGoodDto) {
    return this.prisma.ticketGood.create({
      data: {
        good: {
          connect: {
            id: createTicketGoodDto.goodId,
          },
        },
        number: createTicketGoodDto.number,
        remark: createTicketGoodDto.remark,
        ticket: {
          connect: {
            id: createTicketGoodDto.ticketId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.ticketGood.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketGood`;
  }

  update(id: number, updateTicketGoodDto: UpdateTicketGoodDto) {
    return this.prisma.ticketGood.update({
      where: {
        id,
      },
      data: {
        good: {
          connect: {
            id: updateTicketGoodDto.goodId,
          },
        },
        number: updateTicketGoodDto.number,
        remark: updateTicketGoodDto.remark,
      },
    });
  }

  remove(id: number) {
    return this.prisma.ticketGood.delete({
      where: { id },
    });
  }
}
