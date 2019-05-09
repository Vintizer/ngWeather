import { IHotel } from './../../models/hotel';
import { HotelActions, HotelActionTypes } from './../actions/hotel.actions';

export interface State {
  isLoading: boolean;
  data: IHotel[];
  error: string;
  filter: {
    text: string;
    star: string[];
  };
}
const initialStarValue: string[] = ['3', '4', '5'];
export const initialState: State = {
  isLoading: false,
  data: [],
  error: '',
  filter: {
    text: '',
    star: initialStarValue
  }
};

export function reducer(
  state: State = initialState,
  action: HotelActions
): State {
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
