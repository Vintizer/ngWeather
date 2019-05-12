import { IState } from './index';
import {
  FavoriteHotelActions,
  FavoriteHotelActionTypes
} from './../actions/favorite-hotel.actions';
import { IFavoriteView } from './../../models/hotel';
import { Action, createSelector, MemoizedSelectorWithProps } from '@ngrx/store';

export interface IFavState {
  data: IFavoriteView[];
  isLoading: boolean;
  error: string;
}

export const initialState: IFavState = {
  data: [],
  isLoading: false,
  error: ''
};

export function reducer(
  state: IFavState = initialState,
  action: FavoriteHotelActions
): IFavState {
  switch (action.type) {
    case FavoriteHotelActionTypes.LoadFavoriteHotels:
      return {
        ...state,
        isLoading: true
      };
    case FavoriteHotelActionTypes.LoadFavoriteHotelsSuccess:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case FavoriteHotelActionTypes.LoadFavoriteHotelsFailure:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case FavoriteHotelActionTypes.AddFavoriteHotels:
      return {
        ...state,
        isLoading: true
      };
    case FavoriteHotelActionTypes.AddFavoriteHotelsSuccess:
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false
      };
    case FavoriteHotelActionTypes.AddFavoriteHotelsFailure:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case FavoriteHotelActionTypes.VoteFavoriteHotels:
      return {
        ...state,
        isLoading: true
      };
    case FavoriteHotelActionTypes.VoteFavoriteHotelsSuccess:
      const updatedFavHotels: IFavoriteView[] = state.data.map(
        (hotel: IFavoriteView) => {
          if (hotel.id === action.payload.id) {
            hotel.voted++;
          }
          return hotel;
        }
      );
      return {
        ...state,
        data: updatedFavHotels,
        isLoading: false
      };
    case FavoriteHotelActionTypes.VoteFavoriteHotelsFailure:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case FavoriteHotelActionTypes.RemoveFavoriteHotels:
      return {
        ...state,
        isLoading: true
      };
    case FavoriteHotelActionTypes.RemoveFavoriteHotelsSuccess:
      return {
        ...state,
        data: state.data.filter(
          (hotel: IFavoriteView) => hotel.id !== action.payload.id
        ),
        isLoading: false
      };
    case FavoriteHotelActionTypes.RemoveFavoriteHotelsFailure:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
export const favHotelSelector: MemoizedSelectorWithProps<
  IState,
  number,
  boolean
> = createSelector(
  (state: IState) => state.favoriteHotel.data,
  (favHotels: IFavoriteView[], hotelId: number) => {
    return Boolean(
      favHotels.find((hotel: IFavoriteView) => hotel.id === hotelId)
    );
  }
);
