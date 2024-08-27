import { TestBed } from '@angular/core/testing';

import { EcomStateService } from './ecom-state.service';

describe('EcomStateService', () => {
  let service: EcomStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcomStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
