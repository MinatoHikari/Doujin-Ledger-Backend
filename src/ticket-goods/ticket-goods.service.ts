import { Injectable } from '@nestjs/common';
import { CreateTicketGoodDto } from './dto/create-ticket-good.dto';
import { UpdateTicketGoodDto } from './dto/update-ticket-good.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TicketGoodsService {
  constructor(private prisma: PrismaService) {}

  create(createTicketGoodDto: CreateTicketGoodDto) {
    return this.prisma.ticketGood
      .create({
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
        include: {
          good: {
            include: {
              tags: true,
            },
          },
          ticket: {
            include: {
              ticketGoods: {
                include: {
                  good: true,
                },
              },
            },
          },
        },
      })
      .then((m) => {
        this.prisma.ticket
          .update({
            where: {
              id: m.ticketId,
            },
            data: {
              total: m.ticket.ticketGoods.reduce((acc, item) => {
                return acc + item.number * item.good.price;
              }, 0),
            },
          })
          .then((i) => {
            console.log(i.total);
            return i;
          });
        return m;
      });
  }

  findByTicketId(id: number) {
    return this.prisma.ticketGood
      .findMany({
        where: {
          ticketId: id,
        },
        include: {
          good: true,
        },
      })
      .then((m) => {
        return m;
      });
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketGood`;
  }

  update(id: number, updateTicketGoodDto: UpdateTicketGoodDto) {
    return this.prisma.ticketGood
      .update({
        where: {
          id,
        },
        data: {
          good: updateTicketGoodDto.goodId
            ? {
                connect: {
                  id: updateTicketGoodDto.goodId,
                },
              }
            : undefined,
          number: updateTicketGoodDto.number,
          remark: updateTicketGoodDto.remark ?? undefined,
        },
        include: {
          ticket: {
            include: {
              ticketGoods: {
                include: {
                  good: true,
                },
              },
            },
          },
          good: true,
        },
      })
      .then((m) => {
        this.prisma.ticket
          .update({
            where: {
              id: m.ticketId,
            },
            data: {
              total: m.ticket.ticketGoods.reduce((acc, item) => {
                return acc + item.number * item.good.price;
              }, 0),
            },
          })
          .then((i) => {
            console.log(i.total);
            return i;
          });
        return m;
      });
  }

  remove(id: number) {
    return this.prisma.ticketGood
      .delete({
        where: { id },
        include: {
          ticket: {
            include: {
              ticketGoods: {
                include: {
                  good: true,
                },
              },
            },
          },
          good: true,
        },
      })
      .then((m) => {
        this.prisma.ticket
          .update({
            where: {
              id: m.ticketId,
            },
            data: {
              total: m.ticket.total - m.number * m.good.price,
            },
          })
          .then((i) => {
            console.log(i.total);
            return i;
          });

        return m;
      });
  }
}
