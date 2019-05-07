import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import { SetupService } from '../src/system-settings/aggregates/setup/setup.service';

describe('AppController (e2e)', () => {
  let app;
  const reqResp = {
    appURL: 'http://infra.localhost:3200',
    authServerURL: 'http://auth.localhost:3000',
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: SetupService,
          useValue: {
            async getInfo() {
              return reqResp;
            },
          },
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/info (GET)', () => {
    return request(app.getHttpServer())
      .get('/info')
      .expect(200);
  });
});
