import { TestBed } from '@angular/core/testing';

import { CarinhoService } from './carinho.service';

describe('CarinhoService', () => {
  let service: CarinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
