import { TestBed } from '@angular/core/testing';

import { FlavoursService } from './flavours.service';

describe('FlavoursService', () => {
  let service: FlavoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlavoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
