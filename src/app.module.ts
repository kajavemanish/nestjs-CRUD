import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxModule } from './tax/tax.module';
import { LoggerModule } from './logger/logger.module';
import { SystemSettingsModule } from './system-settings/system-settings.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { TokenCache } from './auth/entities/token-cache/token-cache.entity';
import { ServerSettings } from './system-settings/entities/server-settings/server-settings.entity';
import { Tax } from './tax/entities/tax/tax.entity';

@Module({
  imports: [
    TaxModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        ({
          type: 'mongodb',
          host: configService.get('DB_HOST'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: [TokenCache, ServerSettings, Tax],
          synchronize: true,
          useNewUrlParser: true,
        } as MongoConnectionOptions),
      inject: [ConfigService],
    }),
    LoggerModule,
    SystemSettingsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
