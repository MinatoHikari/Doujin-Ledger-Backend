import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma.service';
import { Group } from '@prisma/client';

let group: Group | null = null;
@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {
    this.prisma.group
      .findMany({
        take: 1,
        include: {
          goods: {
            include: {
              tags: true,
              ticketGoods: true,
            },
          },
        },
      })
      .then((groups) => {
        if (groups.length !== 0) this.group = groups[0];
      });
  }

  get group() {
    return group;
  }
  set group(v) {
    group = v;
  }

  async create(createGroupDto: CreateGroupDto) {
    const groups = await this.prisma.group.findMany({
      take: 1,
    });
    if (groups.length > 0) return undefined;
    return this.prisma.group
      .create({
        data: {
          name: createGroupDto.name,
        },
      })
      .then((g) => {
        this.group = g;
        return g;
      });
  }

  async findAll() {
    const groups = await this.prisma.group.findMany({
      take: 1,
      include: {
        goods: {
          include: {
            tags: true,
            ticketGoods: true,
          },
        },
      },
    });
    if (groups.length === 0) return undefined;
    return groups[0];
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return this.prisma.group.delete({
      where: {
        id,
      },
      include: {
        goods: {
          include: {
            tags: true,
            ticketGoods: true,
          },
        },
      },
    });
  }
}
