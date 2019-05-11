import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FavoriteHotelEffects } from './favorite-hotel.effects';

describe('FavoriteHotelEffects', () => {
  let actions$: Observable<any>;
  let effects: FavoriteHotelEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavoriteHotelEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(FavoriteHotelEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
