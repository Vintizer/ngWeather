import { IState } from './index';
import { IHiglight, IHotel } from './../../models/hotel';
import { HotelActions, HotelActionTypes } from './../actions/hotel.actions';
import {
  createSelector,
  MemoizedSelector,
  MemoizedSelectorWithProps
} from '@ngrx/store';

interface IFilterState {
  text: string;
  star: string[];
}
export interface IHotelState {
  isLoading: boolean;
  data: IHotel[];
  error: string;
  filter: IFilterState;
}
const initialStarValue: string[] = ['3', '4', '5'];
export const initialState: IHotelState = {
  isLoading: false,
  data: [],
  error: '',
  filter: {
    text: '',
    star: initialStarValue
  }
};

export function reducer(
  state: IHotelState = initialState,
  action: HotelActions
): IHotelState {
  switch (action.type) {
    case HotelActionTypes.LoadHotels:
      return {
        ...state,
        isLoading: true
      };
    case HotelActionTypes.LoadHotelsSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case HotelActionTypes.LoadHotelsError:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case HotelActionTypes.SetTextFilter:
      return {
        ...state,
        isLoading: false,
        filter: {
          ...state.filter,
          text: action.payload
        }
      };
    case HotelActionTypes.SetStarFilter:
      let stars: string[] = [...state.filter.star];
      if (action.payload === 'All') {
        stars = stars.length < 3 ? initialStarValue : [];
      } else {
        if (stars.includes(action.payload)) {
          stars = stars.filter((starVal: string) => starVal !== action.payload);
        } else {
          stars = [...stars, action.payload];
        }
      }
      return {
        ...state,
        isLoading: false,
        filter: {
          ...state.filter,
          star: stars
        }
      };
    default:
      return state;
  }
}

export const starSelector: MemoizedSelectorWithProps<
  IState,
  string,
  boolean
> = createSelector(
  (state: IState) => state.hotel.filter.star,
  (star: string[], starValue: string) => {
    return star.includes(starValue);
  }
);
export const textSelector: MemoizedSelectorWithProps<
  IState,
  string,
  IHiglight[]
> = createSelector(
  (state: IState) => state.hotel.filter.text,
  (text: string, hotelText: string) => {
    let dataArray: IHiglight[] = [];
    const isTextNeedHighlight: boolean =
      hotelText.toUpperCase().indexOf(text.toUpperCase()) > -1;
    if (!text || !isTextNeedHighlight) {
      dataArray = [{ text: hotelText, isHighlight: false }];
    } else {
      dataArray = [];
      let index: number = 0;
      while (index !== -1) {
        const foundIndex: number = hotelText
          .toUpperCase()
          .indexOf(text.toUpperCase(), index);
        if (foundIndex > -1) {
          dataArray.push({
            text: hotelText.slice(index, foundIndex),
            isHighlight: false
          });
          dataArray.push({
            text: hotelText.slice(foundIndex, foundIndex + text.length),
            isHighlight: true
          });
          index = foundIndex + 1;
        } else {
          dataArray.push({
            text: hotelText.slice(index + text.length - 1),
            isHighlight: false
          });
          index = -1;
        }
      }
    }
    return dataArray;
  }
);

export const filteredHotelsSelector: MemoizedSelector<
  IState,
  IHotel[]
> = createSelector(
  (state: IState) => state.hotel.data,
  (state: IState) => state.hotel.filter,
  (hotels: IHotel[], filter: IFilterState) => {
    return hotels.filter((hotel: IHotel) => {
      const isStarEquals: boolean = filter.star.includes(
        hotel.stars.toString()
      );
      const isTextEqual: boolean =
        hotel.description.toUpperCase().includes(filter.text.toUpperCase()) ||
        hotel.title.toUpperCase().includes(filter.text.toUpperCase());
      return isStarEquals && isTextEqual;
    });
  }
);
