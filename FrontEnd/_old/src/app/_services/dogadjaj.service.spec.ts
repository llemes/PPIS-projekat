import { TestBed } from '@angular/core/testing';

import { DogadjajService } from './dogadjaj.service';

describe('DogadjajService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogadjajService = TestBed.get(DogadjajService);
    expect(service).toBeTruthy();
  });
});
