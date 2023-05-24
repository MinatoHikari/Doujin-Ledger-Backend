import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SnapshotItemService } from './snapshot-item.service';
import { CreateSnapshotItemDto } from './dto/create-snapshot-item.dto';
import { UpdateSnapshotItemDto } from './dto/update-snapshot-item.dto';

@Controller('snapshot-item')
export class SnapshotItemController {
  constructor(private readonly snapshotItemService: SnapshotItemService) {}

  @Post()
  create(@Body() createSnapshotItemDto: CreateSnapshotItemDto) {
    return this.snapshotItemService.create(createSnapshotItemDto);
  }

  @Get()
  findAll() {
    return this.snapshotItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.snapshotItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSnapshotItemDto: UpdateSnapshotItemDto) {
    return this.snapshotItemService.update(+id, updateSnapshotItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.snapshotItemService.remove(+id);
  }
}
