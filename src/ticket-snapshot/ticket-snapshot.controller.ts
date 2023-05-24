import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TicketSnapshotService } from './ticket-snapshot.service';
import { CreateTicketSnapshotDto } from './dto/create-ticket-snapshot.dto';
import { UpdateTicketSnapshotDto } from './dto/update-ticket-snapshot.dto';

@Controller('ticket-snapshot')
export class TicketSnapshotController {
  constructor(private readonly ticketSnapshotService: TicketSnapshotService) {}

  @Post()
  create(@Body() createTicketSnapshotDto: CreateTicketSnapshotDto) {
    return this.ticketSnapshotService.create(createTicketSnapshotDto);
  }

  @Get()
  findAll() {
    return this.ticketSnapshotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketSnapshotService.findOne(+id);
  }

  @Post(':id')
  update(
    @Param('id') id: string,
    @Body() updateTicketSnapshotDto: UpdateTicketSnapshotDto,
  ) {
    return this.ticketSnapshotService.update(id, updateTicketSnapshotDto);
  }

  @Post('override/:id')
  override(
    @Param('id') id: string,
    @Body() updateTicketSnapshotDto: UpdateTicketSnapshotDto,
  ) {
    return this.ticketSnapshotService.override(id, updateTicketSnapshotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketSnapshotService.remove(id);
  }
}
