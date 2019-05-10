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

export interface IState {
  // hotels: IHotel[]
  hotel: fromHotel.IHotelState;
}

export const reducers: ActionReducerMap<IState> = {

  hotel: fromHotel.reducer,
};


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
