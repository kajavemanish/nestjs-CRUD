import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tax {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemCode: number;

  @Column()
  itemName: string;

  @Column()
  quantity: number;

  @Column()
  value: number;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  totalTax: number;

  @Column()
  taxValue: number;
}
