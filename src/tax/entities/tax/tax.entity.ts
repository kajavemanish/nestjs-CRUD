import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class Tax {
  @ObjectIdColumn()
  _id: ObjectID;

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
