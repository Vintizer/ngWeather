import { IRouterStateUrl } from './custom-route-serializer';
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
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface IState {
  router: RouterReducerState<IRouterStateUrl>;
  hotel: fromHotel.IHotelState;
  favoriteHotel: fromFavoriteHotel.IFavState;
}

export const reducers: ActionReducerMap<IState> = {

  hotel: fromHotel.reducer,
  router: routerReducer,
  favoriteHotel: fromFavoriteHotel.reducer,
};


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
