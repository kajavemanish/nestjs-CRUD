import {
  Controller,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Get,
} from '@nestjs/common';
import { Tax } from '../../entities/tax/tax.entity';
import { TaxService } from './tax.service';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('tax')
export class TaxController {
  constructor(private taxService: TaxService) {}

  @Get()
  index(): Promise<Tax[]> {
    return this.taxService.findAll();
  }
  @Post('create')
  async create(@Body() taxData: Tax): Promise<any> {
    return this.taxService.create(taxData);
  }
  @Post('calc')
  async calc(@Body() taxData): Promise<any> {
    return this.taxService.create(taxData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() taxData: Tax): Promise<any> {
    taxData.id = Number(id);
    return await this.taxService.update(taxData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return await this.taxService.delete(id);
  }
}

/*
import { Controller, Get } from '@nestjs/common';

@Controller('tax')
export class ContactsController {
    @Get()
    index(): string {
      return "This action will return tax";
    }
}
async calc(@Body('amount') amt) {
    return amt*.24;
}
*/
