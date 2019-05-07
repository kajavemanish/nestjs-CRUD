import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaxCalcLog } from './tax-calc-log.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import * as uuidv4 from 'uuid/v4';

export const TAX_RATE = 0.24;
export const DECIMAL_POINTS = 2;

@Injectable()
export class TaxService {
  constructor(
    @InjectRepository(TaxCalcLog)
    private taxRepository: Repository<TaxCalcLog>,
  ) {}
  async findAll(): Promise<TaxCalcLog[]> {
    return await this.taxRepository.find();
  }

  async create(taxBody): Promise<TaxCalcLog> {
    taxBody.uuid = uuidv4();
    const taxValue = Number(
      Math.round(taxBody.value * 100).toFixed(DECIMAL_POINTS),
    );
    taxBody.taxValue = taxValue * TAX_RATE;
    taxBody.totalTax = Number(
      (taxBody.value + taxBody.taxValue).toFixed(DECIMAL_POINTS),
    );
    return await this.taxRepository.save(taxBody);
  }

  async update(tax: TaxCalcLog): Promise<UpdateResult> {
    return await this.taxRepository.update(tax._id, tax);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.taxRepository.delete(id);
  }
}
