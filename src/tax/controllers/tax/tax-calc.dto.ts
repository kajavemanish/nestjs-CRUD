import { IsString, IsNumber } from 'class-validator';

export class TaxCalcDto {
  @IsString()
  itemCode: string;
  @IsString()
  itemName: string;
  @IsNumber()
  quantity: number;
  @IsNumber()
  value: number;
  @IsString()
  state: string;
  @IsString()
  country: string;
}
