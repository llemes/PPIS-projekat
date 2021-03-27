import { TestBed } from '@angular/core/testing';

import { UlogaService } from './uloga.service';

describe('UlogaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UlogaService = TestBed.get(UlogaService);
    expect(service).toBeTruthy();
  });
});
