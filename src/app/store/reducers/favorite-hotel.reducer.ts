import {
  FavoriteHotelActions,
  FavoriteHotelActionTypes
} from './../actions/favorite-hotel.actions';
import { IFavoriteView } from './../../models/hotel';
import { Action } from '@ngrx/store';

export interface IFavState {
  favorites: IFavoriteView[];
  isLoading: boolean;
  error: string;
}

export const initialState: IFavState = {
  favorites: [],
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
        favorites: action.payload,
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
        favorites: [...state.favorites, action.payload],
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
      const updatedFavHotels: IFavoriteView[] = state.favorites.map(
        (hotel: IFavoriteView) => {
          if (hotel.id === action.payload.id) {
            hotel.voted++;
          }
          return hotel;
        }
      );
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
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
        favorites: state.favorites.filter((hotel: IFavoriteView) => hotel.id !== action.payload.id),
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
