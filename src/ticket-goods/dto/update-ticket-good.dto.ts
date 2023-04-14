import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketGoodDto } from './create-ticket-good.dto';

export class UpdateTicketGoodDto extends PartialType(CreateTicketGoodDto) {}
