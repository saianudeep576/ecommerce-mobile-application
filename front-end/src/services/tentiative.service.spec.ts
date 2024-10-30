import { TestBed } from '@angular/core/testing';

import { TentiativeService } from './tentiative.service';

describe('TentiativeService', () => {
  let service: TentiativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TentiativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
