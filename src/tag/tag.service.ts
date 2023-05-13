import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  create(createTagDto: CreateTagDto) {
    return this.prisma.tag.create({
      data: {
        name: createTagDto.name,
      },
      include: {
        goods: {
          include: { tags: true },
        },
      },
    });
  }

  findAll(hasGoods: boolean) {
    return this.prisma.tag
      .findMany({
        include: {
          goods: true,
        },
      })
      .then((tags) => {
        if (hasGoods)
          return tags.filter((i) => {
            return i.goods.length > 0;
          });
        else return tags;
      });
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return this.prisma.tag.delete({
      where: { id },
    });
  }
}
