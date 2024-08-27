import { TestBed } from '@angular/core/testing';

import { EcomApiService } from './ecom-api.service';

describe('EcomApiService', () => {
  let service: EcomApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcomApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
