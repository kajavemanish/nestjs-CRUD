import { IsNumberString, IsString } from 'class-validator';

export class TaxCalcDto {
  @IsNumberString()
  itemCode: string;
  @IsString()
  itemName: string;
  @IsNumberString()
  quantity: string;
  @IsNumberString()
  value: string;
  @IsString()
  state: string;
  @IsString()
  country: string;
}
