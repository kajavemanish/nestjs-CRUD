import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class TaxCalcLog {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  uuid: string;

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
