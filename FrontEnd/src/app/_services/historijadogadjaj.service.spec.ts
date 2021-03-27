import { TestBed } from '@angular/core/testing';

import { HistorijadogadjajService } from './historijadogadjaj.service';

describe('HistorijadogadjajService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HistorijadogadjajService = TestBed.get(HistorijadogadjajService);
    expect(service).toBeTruthy();
  });
});
