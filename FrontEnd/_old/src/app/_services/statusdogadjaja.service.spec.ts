import { TestBed } from '@angular/core/testing';

import { StatusdogadjajaService } from './statusdogadjaja.service';

describe('StatusdogadjajaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusdogadjajaService = TestBed.get(StatusdogadjajaService);
    expect(service).toBeTruthy();
  });
});
