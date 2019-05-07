import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TaxService } from './tax.service';
import { Tax } from '../../entities/tax/tax.entity';

describe('TaxService', () => {
  let service: TaxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaxService,
        { provide: getRepositoryToken(Tax), useValue: {} },
      ],
    }).compile();

    service = module.get<TaxService>(TaxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
