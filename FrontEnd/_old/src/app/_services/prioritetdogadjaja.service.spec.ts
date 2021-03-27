import { TestBed } from '@angular/core/testing';

import { PrioritetdogadjajaService } from './prioritetdogadjaja.service';

describe('PrioritetdogadjajaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrioritetdogadjajaService = TestBed.get(PrioritetdogadjajaService);
    expect(service).toBeTruthy();
  });
});
