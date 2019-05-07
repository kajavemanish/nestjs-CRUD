import { Module } from '@nestjs/common';
import { TaxService } from './entities/tax-calc-log/tax.service';
import { TaxController } from './controllers/tax/tax.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxCalcLog } from './entities/tax-calc-log/tax-calc-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaxCalcLog])],
  providers: [TaxService],
  controllers: [TaxController],
})
export class TaxModule {}

/*
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxModule } from './tax/tax.module';
import { TaxService } from './tax/tax.service';
import { TaxController } from './tax/tax.controller';

@Module({
  imports: [TaxModule],
  controllers: [AppController, TaxController],
  providers: [AppService, TaxService],
})
export class AppModule {}
*/
