export class CreateTicketSnapshotDto {
  id: string;
  state: string;
  createTime: string;
  list: { snapshotId: string; name: string; number: number }[];
}
