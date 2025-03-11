import { TestBed } from '@angular/core/testing';

import { RecetasManagerService } from './recetas-manager.service';

describe('RecetasManagerService', () => {
  let service: RecetasManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
