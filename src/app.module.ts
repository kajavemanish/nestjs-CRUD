import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxModule } from './tax/tax.module';
import { TypeOrmModule } from '@nestjs/typeorm';
/*import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxModule } from './tax/tax.module';
import { TaxCalModule } from './tax-cal/tax-cal.module';
import { AuthModule } from './auth/auth.module';*/
import { LoggerModule } from './logger/logger.module';
import { SystemSettingsModule } from './system-settings/system-settings.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TaxModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    LoggerModule,
    SystemSettingsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

/*

@Module({
  imports: [TaxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/
