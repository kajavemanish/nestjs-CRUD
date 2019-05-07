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
import { TaxCalcLog } from '../../entities/tax-calc-log/tax-calc-log.entity';
import { TaxService } from '../../entities/tax-calc-log/tax.service';
import { TokenGuard } from '../../../auth/guards/token.guard';
import { Roles } from '../../../auth/decorators/roles.decorator';
import { ADMINISTRATOR } from '../../../constants/app-strings';
import { RoleGuard } from '../../../auth/guards/role.guard';
import { TaxCalcDto } from './tax-calc.dto';

@Controller('tax')
export class TaxController {
  constructor(private taxService: TaxService) {}

  @Get()
  index(): Promise<TaxCalcLog[]> {
    return this.taxService.findAll();
  }

  @Post('calc')
  @UsePipes(ValidationPipe)
  @UseGuards(TokenGuard)
  async calc(@Body() taxData: TaxCalcDto, @Req() req): Promise<any> {
    const clientId = { clientId: req.token.clientId };
    const payload = {
      ...taxData,
      ...clientId,
    };
    return await this.taxService.create(payload);
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
