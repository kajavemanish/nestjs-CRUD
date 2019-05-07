import { Test, TestingModule } from '@nestjs/testing';
import { TaxController } from './tax.controller';
import { TaxService } from '../../entities/tax-calc-log/tax.service';
import { TokenGuard } from '../../../auth/guards/token.guard';
import { RoleGuard } from '../../../auth/guards/role.guard';
import { Reflector } from '@nestjs/core';
import { HttpService } from '@nestjs/common';
import { TokenCacheService } from '../../../auth/entities/token-cache/token-cache.service';
import { ServerSettingsService } from '../../../system-settings/entities/server-settings/server-settings.service';

describe('Tax Controller', () => {
  let controller: TaxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxController],
      providers: [
        { provide: TaxService, useValue: {} },
        { provide: Reflector, useValue: {} },
        { provide: HttpService, useValue: {} },
        { provide: TokenCacheService, useValue: {} },
        { provide: ServerSettingsService, useValue: {} },
      ],
    })
      .overrideGuard(TokenGuard)
      .useValue({})
      .overrideGuard(RoleGuard)
      .useValue({})
      .compile();

    controller = module.get<TaxController>(TaxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
