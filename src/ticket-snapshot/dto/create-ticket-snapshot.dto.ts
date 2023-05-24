export class CreateTicketSnapshotDto {
  readonly id: string;
  readonly state: string;
  readonly createTime: string;
  readonly list: { snapshotId: string; name: string; number: number }[];
}
