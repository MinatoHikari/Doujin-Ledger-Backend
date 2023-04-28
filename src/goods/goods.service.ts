import { Injectable } from '@nestjs/common';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { PrismaService } from '../prisma.service';
import { GroupService } from 'src/group/group.service';

@Injectable()
export class GoodsService {
  constructor(private prisma: PrismaService, private group: GroupService) {}

  async create(createGoodDto: CreateGoodDto) {
    return this.prisma.good.create({
      data: {
        name: createGoodDto.name,
        price: createGoodDto.price,
        remark: createGoodDto.remark,
        tags: {
          connectOrCreate: (createGoodDto.tags ?? []).map((tag) => {
            return {
              where: {
                name: tag,
              },
              create: {
                name: tag,
              },
            };
          }),
        },
        group: {
          connect: {
            id: this.group.group.id,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.good.findMany({
      include: { tags: true },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} good`;
  }

  async update(id: number, updateGoodDto: UpdateGoodDto) {
    return this.prisma.good.update({
      where: { id },
      data: {
        name: updateGoodDto.name,
        price: updateGoodDto.price,
        remark: updateGoodDto.remark,
        tags: {
          connectOrCreate: (updateGoodDto.tags ?? []).map((tag) => {
            return {
              where: {
                name: tag,
              },
              create: {
                name: tag,
              },
            };
          }),
          set: updateGoodDto.tags.map((i) => ({
            name: i,
          })),
        },
        group: {
          connect: {
            id: this.group.group.id,
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.good.delete({
      where: {
        id,
      },
    });
  }
}
