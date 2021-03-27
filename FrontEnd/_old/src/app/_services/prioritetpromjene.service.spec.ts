import { TestBed } from '@angular/core/testing';

import { PrioritetpromjeneService } from './prioritetpromjene.service';

describe('PrioritetpromjeneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrioritetpromjeneService = TestBed.get(PrioritetpromjeneService);
    expect(service).toBeTruthy();
  });
});
