import { Module } from '@nestjs/common';
import { TaxService } from './controllers/tax/tax.service';
import { TaxController } from './controllers/tax/tax.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tax } from './entities/tax/tax.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tax])],
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
