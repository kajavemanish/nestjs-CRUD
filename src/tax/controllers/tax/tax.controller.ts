import {
  Controller,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Get,
  UseGuards,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Tax } from '../../entities/tax/tax.entity';
import { TaxService } from './tax.service';
import { TokenGuard } from '../../../auth/guards/token.guard';
import { Roles } from '../../../auth/decorators/roles.decorator';
import { ADMINISTRATOR } from '../../../constants/app-strings';
import { RoleGuard } from '../../../auth/guards/role.guard';
import { TaxCalcDto } from './tax-calc.dto';

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
  @UsePipes(ValidationPipe)
  async calc(@Body() taxData: TaxCalcDto): Promise<any> {
    return this.taxService.create(taxData);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() taxData): Promise<any> {
    taxData._id = Number(id);
    return await this.taxService.update(taxData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return await this.taxService.delete(id);
  }

  @Get('v1/protected')
  @Roles(ADMINISTRATOR)
  @UseGuards(TokenGuard, RoleGuard)
  protectedResource(@Req() req) {
    // req.token has user uuid, clientId, roles;
    return { message: 'success' };
  }
}
