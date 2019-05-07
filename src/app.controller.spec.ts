import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SetupService } from './system-settings/aggregates/setup/setup.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, { provide: SetupService, useValue: {} }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('info', () => {
    it('should be defined', () => {
      expect(appController).toBeDefined();
    });
  });
});
