import { TestBed } from '@angular/core/testing';

import { FavoriteService } from './favorite-service.service';

describe('FavoriteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteService = TestBed.get(FavoriteService);
    expect(service).toBeTruthy();
  });
});
