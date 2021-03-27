import { TestBed } from '@angular/core/testing';

import { PromjeneService } from './promjene.service';

describe('PromjeneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromjeneService = TestBed.get(PromjeneService);
    expect(service).toBeTruthy();
  });
});
