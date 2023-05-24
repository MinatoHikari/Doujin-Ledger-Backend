import { Injectable } from '@nestjs/common';
import { CreateTicketSnapshotDto } from './dto/create-ticket-snapshot.dto';
import { UpdateTicketSnapshotDto } from './dto/update-ticket-snapshot.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TicketSnapshotService {
  constructor(private prisma: PrismaService) {}

  create(createTicketSnapshotDto: CreateTicketSnapshotDto) {
    return this.prisma.ticketSnapshot.create({
      data: {
        createTime: createTicketSnapshotDto.createTime,
        id: createTicketSnapshotDto.id,
        state: createTicketSnapshotDto.state,
        list: {
          create: createTicketSnapshotDto.list.map((i) => {
            return {
              number: i.number,
              name: i.name,
            };
          }),
        },
      },
      include: {
        list: true,
      },
    });
  }

  findAll() {
    return this.prisma.ticketSnapshot.findMany({
      include: {
        list: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketSnapshot`;
  }

  update(id: string, updateTicketSnapshotDto: UpdateTicketSnapshotDto) {
    return this.prisma.ticketSnapshot.update({
      where: { id },
      data: {
        state: updateTicketSnapshotDto.state,
      },
      include: {
        list: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.ticketSnapshot.delete({
      where: { id },
      include: {
        list: true,
      },
    });
  }
}
