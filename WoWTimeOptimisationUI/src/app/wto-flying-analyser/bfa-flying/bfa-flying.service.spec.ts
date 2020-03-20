import { TestBed } from '@angular/core/testing';

import { BfaFlyingService } from './bfa-flying.service';

describe('BfaFlyingService', () => {
  let service: BfaFlyingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BfaFlyingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
