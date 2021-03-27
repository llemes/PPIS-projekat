import { TestBed } from '@angular/core/testing';

import { KategorijapromjeneService } from './kategorijapromjene.service';

describe('KategorijapromjeneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KategorijapromjeneService = TestBed.get(KategorijapromjeneService);
    expect(service).toBeTruthy();
  });
});
