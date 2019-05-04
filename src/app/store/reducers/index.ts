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

export interface State {
  // hotels: IHotel[]
  hotel: fromHotel.State;
}

export const reducers: ActionReducerMap<State> = {

  hotel: fromHotel.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
