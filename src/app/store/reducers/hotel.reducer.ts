import { HotelActions, HotelActionTypes } from './../actions/hotel.actions';


export interface State {

}

export const initialState: State = {
  isLoading: false,
  data: [],
  error: ''
};

export function reducer(state: State = initialState, action: HotelActions): State {
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
    default:
      return state;
  }
}
