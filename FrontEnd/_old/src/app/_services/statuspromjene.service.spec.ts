import { TestBed } from '@angular/core/testing';

import { StatuspromjeneService } from './statuspromjene.service';

describe('StatuspromjeneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatuspromjeneService = TestBed.get(StatuspromjeneService);
    expect(service).toBeTruthy();
  });
});
