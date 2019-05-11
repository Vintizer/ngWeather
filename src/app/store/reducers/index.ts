import { IHotel } from './../../models/hotel';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromHotel from './hotel.reducer';
import * as fromFavoriteHotel from './favorite-hotel.reducer';

export interface IState {
  // hotels: IHotel[]
  hotel: fromHotel.IHotelState;
  favoriteHotel: fromFavoriteHotel.IFavState;
}

export const reducers: ActionReducerMap<IState> = {

  hotel: fromHotel.reducer,
  favoriteHotel: fromFavoriteHotel.reducer,
};


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
