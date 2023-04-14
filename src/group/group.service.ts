import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { PrismaService } from 'src/prisma.service';
import { Group } from '@prisma/client';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {
    this.prisma.group
      .findMany({
        take: 1,
      })
      .then((groups) => {
        if (groups.length !== 0) this.group = groups[0];
      });
  }

  group: Group | null = null;

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
    });
  }
}
