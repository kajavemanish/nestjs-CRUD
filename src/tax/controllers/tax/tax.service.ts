import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tax } from '../../entities/tax/tax.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

export const TAX_RATE = 0.24;

@Injectable()
export class TaxService {
  constructor(
    @InjectRepository(Tax)
    private taxRepository: Repository<Tax>,
  ) {}
  async findAll(): Promise<Tax[]> {
    return await this.taxRepository.find();
  }

  async create(taxBody): Promise<Tax> {
    taxBody.taxValue = taxBody.value * TAX_RATE;
    taxBody.totalTax = taxBody.value + taxBody.taxValue;
    return await this.taxRepository.save(taxBody);
  }

  async update(tax: Tax): Promise<UpdateResult> {
    return await this.taxRepository.update(tax._id, tax);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.taxRepository.delete(id);
  }
}
