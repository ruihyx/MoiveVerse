import { TestBed } from '@angular/core/testing';

import { ScrollpositionService } from './scrollposition.service';

describe('ScrollpositionService', () => {
  let service: ScrollpositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollpositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
