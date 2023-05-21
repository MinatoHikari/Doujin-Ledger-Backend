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
    });
    if (groups.length === 0) return undefined;
    return groups[0];
  }

  async findByName(name: string) {
    return await this.prisma.group.findFirst({
      where: {
        name,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return this.prisma.group.update({
      where: { id },
      data: {
        name: updateGroupDto.name,
      },
    });
  }

  remove(id: number) {
    return this.prisma.group.delete({
      where: {
        id,
      },
    });
  }
}
