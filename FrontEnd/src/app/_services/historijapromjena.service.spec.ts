import { TestBed } from '@angular/core/testing';

import { HistorijapromjenaService } from './historijapromjena.service';

describe('HistorijapromjenaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorijapromjenaService = TestBed.get(HistorijapromjenaService);
    expect(service).toBeTruthy();
  });
});
