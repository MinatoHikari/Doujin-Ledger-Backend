import { Injectable } from '@nestjs/common';
import { CreateSnapshotItemDto } from './dto/create-snapshot-item.dto';
import { UpdateSnapshotItemDto } from './dto/update-snapshot-item.dto';

@Injectable()
export class SnapshotItemService {
  create(createSnapshotItemDto: CreateSnapshotItemDto) {
    return 'This action adds a new snapshotItem';
  }

  findAll() {
    return `This action returns all snapshotItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} snapshotItem`;
  }

  update(id: number, updateSnapshotItemDto: UpdateSnapshotItemDto) {
    return `This action updates a #${id} snapshotItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} snapshotItem`;
  }
}
