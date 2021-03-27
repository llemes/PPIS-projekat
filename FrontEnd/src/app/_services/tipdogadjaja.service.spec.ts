import { TestBed } from '@angular/core/testing';

import { TipdogadjajaService } from './tipdogadjaja.service';

describe('TipdogadjajaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipdogadjajaService = TestBed.get(TipdogadjajaService);
    expect(service).toBeTruthy();
  });
});
