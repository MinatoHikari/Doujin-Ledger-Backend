import { PartialType } from '@nestjs/mapped-types';
import { CreateSnapshotItemDto } from './create-snapshot-item.dto';

export class UpdateSnapshotItemDto extends PartialType(CreateSnapshotItemDto) {}
