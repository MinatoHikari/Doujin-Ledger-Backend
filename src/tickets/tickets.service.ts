import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/prisma.service';
import { GroupService } from 'src/group/group.service';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaService, private group: GroupService) {}

  create(createTicketDto: CreateTicketDto) {
    return this.prisma.ticket.create({
      data: {
        ticketGoods: {
          create: createTicketDto.ticketGoods.map((i) => {
            return {
              good: {
                connect: { id: i.goodId },
              },
              number: i.number,
              customer: '',
            };
          }),
        },
        total: createTicketDto.ticketGoods.reduce((pv, data) => {
          return pv + data.number * data.price;
        }, 0),
        group: {
          connect: {
            id: this.group.group.id,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.ticket.findMany({
      include: {
        ticketGoods: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where: { id },
      data: {
        ticketGoods: {
          connectOrCreate: updateTicketDto.ticketGoods.map((i) => {
            return {
              where: {
                id: i.id,
              },
              create: {
                good: {
                  connect: {
                    id: i.goodId,
                  },
                },
                number: i.number,
                customer: '',
              },
            };
          }),
        },
        total: updateTicketDto.ticketGoods.reduce((pv, data) => {
          return pv + data.number * data.price;
        }, 0),
        group: {
          connect: {
            id: this.group.group.id,
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.ticket.delete({
      where: {
        id,
      },
      include: {
        ticketGoods: true,
      },
    });
  }
}
