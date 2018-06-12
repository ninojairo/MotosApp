import { TestBed, inject } from '@angular/core/testing';

import { MotorcyclesService } from './motorcycles.service';

describe('MotorcyclesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MotorcyclesService]
    });
  });

  it('should be created', inject([MotorcyclesService], (service: MotorcyclesService) => {
    expect(service).toBeTruthy();
  }));
});
