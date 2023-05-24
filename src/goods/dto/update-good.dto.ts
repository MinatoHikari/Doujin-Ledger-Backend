import { PartialType } from '@nestjs/mapped-types';
import { CreateGoodDto } from './create-good.dto';

export class UpdateGoodDto extends PartialType(CreateGoodDto) {
  readonly name: string;
  readonly price: number;
  readonly remark: string;
  readonly id: number;
  readonly tags: string[];
  readonly stock: number;
}
