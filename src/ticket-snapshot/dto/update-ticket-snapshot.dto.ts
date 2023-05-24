import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketSnapshotDto } from './create-ticket-snapshot.dto';

export class UpdateTicketSnapshotDto extends PartialType(
  CreateTicketSnapshotDto,
) {}
