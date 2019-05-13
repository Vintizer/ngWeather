import { IFavoriteView, IHotelView } from './../../models/hotel';
import { Action } from '@ngrx/store';

export enum FavoriteHotelActionTypes {
  LoadFavoriteHotels = '[FavoriteHotel] Load FavoriteHotels',
  LoadFavoriteHotelsSuccess = '[FavoriteHotel] Load FavoriteHotels Success',
  LoadFavoriteHotelsFailure = '[FavoriteHotel] Load FavoriteHotels Failure',

  AddFavoriteHotels = '[FavoriteHotel] Add FavoriteHotels',
  AddFavoriteHotelsSuccess = '[FavoriteHotel] Add FavoriteHotels Success',
  AddFavoriteHotelsFailure = '[FavoriteHotel] Add FavoriteHotels Failure',

  VoteFavoriteHotels = '[FavoriteHotel] Vote FavoriteHotels',
  VoteFavoriteHotelsSuccess = '[FavoriteHotel] Vote FavoriteHotels Success',
  VoteFavoriteHotelsFailure = '[FavoriteHotel] Vote FavoriteHotels Failure',

  RemoveFavoriteHotels = '[FavoriteHotel] Remove FavoriteHotels',
  RemoveFavoriteHotelsSuccess = '[FavoriteHotel] Remove FavoriteHotels Success',
  RemoveFavoriteHotelsFailure = '[FavoriteHotel] Remove FavoriteHotels Failure'
}

// tslint:disable-next-line: max-classes-per-file
export class LoadFavoriteHotels implements Action {
  public readonly type: FavoriteHotelActionTypes.LoadFavoriteHotels =
    FavoriteHotelActionTypes.LoadFavoriteHotels;
}

// tslint:disable-next-line: max-classes-per-file
export class LoadFavoriteHotelsSuccess implements Action {
  public readonly type: FavoriteHotelActionTypes.LoadFavoriteHotelsSuccess =
    FavoriteHotelActionTypes.LoadFavoriteHotelsSuccess;
  public constructor(public payload: IFavoriteView[]) {}
}

// tslint:disable-next-line: max-classes-per-file
export class LoadFavoriteHotelsFailure implements Action {
  public readonly type: FavoriteHotelActionTypes.LoadFavoriteHotelsFailure =
    FavoriteHotelActionTypes.LoadFavoriteHotelsFailure;
  public constructor(public payload: string) {}
}

// tslint:disable-next-line: max-classes-per-file
export class AddFavoriteHotels implements Action {
  public readonly type: FavoriteHotelActionTypes.AddFavoriteHotels =
    FavoriteHotelActionTypes.AddFavoriteHotels;
  public constructor(public payload: IHotelView) {}
}

// tslint:disable-next-line: max-classes-per-file
export class AddFavoriteHotelsSuccess implements Action {
  public readonly type: FavoriteHotelActionTypes.AddFavoriteHotelsSuccess =
    FavoriteHotelActionTypes.AddFavoriteHotelsSuccess;
  public constructor(public payload: IFavoriteView) {}
}

// tslint:disable-next-line: max-classes-per-file
export class AddFavoriteHotelsFailure implements Action {
  public readonly type: FavoriteHotelActionTypes.AddFavoriteHotelsFailure =
    FavoriteHotelActionTypes.AddFavoriteHotelsFailure;
  public constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class VoteFavoriteHotels implements Action {
  public readonly type: FavoriteHotelActionTypes.VoteFavoriteHotels =
    FavoriteHotelActionTypes.VoteFavoriteHotels;
  public constructor(public payload: number) {}
}

// tslint:disable-next-line: max-classes-per-file
export class VoteFavoriteHotelsSuccess implements Action {
  public readonly type: FavoriteHotelActionTypes.VoteFavoriteHotelsSuccess =
    FavoriteHotelActionTypes.VoteFavoriteHotelsSuccess;
  public constructor(public payload: IFavoriteView) {}
}

// tslint:disable-next-line: max-classes-per-file
export class VoteFavoriteHotelsFailure implements Action {
  public readonly type: FavoriteHotelActionTypes.VoteFavoriteHotelsFailure =
    FavoriteHotelActionTypes.VoteFavoriteHotelsFailure;
  public constructor(public payload: string) {}
}
// tslint:disable-next-line: max-classes-per-file
export class RemoveFavoriteHotels implements Action {
  public readonly type: FavoriteHotelActionTypes.RemoveFavoriteHotels =
    FavoriteHotelActionTypes.RemoveFavoriteHotels;
    public constructor(public payload: number) {}
  }

// tslint:disable-next-line: max-classes-per-file
export class RemoveFavoriteHotelsSuccess implements Action {
  public readonly type: FavoriteHotelActionTypes.RemoveFavoriteHotelsSuccess =
    FavoriteHotelActionTypes.RemoveFavoriteHotelsSuccess;
  public constructor(public payload: number) {}
}

// tslint:disable-next-line: max-classes-per-file
export class RemoveFavoriteHotelsFailure implements Action {
  public readonly type: FavoriteHotelActionTypes.RemoveFavoriteHotelsFailure =
    FavoriteHotelActionTypes.RemoveFavoriteHotelsFailure;
  public constructor(public payload: string) {}
}
export type FavoriteHotelActions =
  | LoadFavoriteHotels
  | LoadFavoriteHotelsSuccess
  | LoadFavoriteHotelsFailure
  | AddFavoriteHotels
  | AddFavoriteHotelsSuccess
  | AddFavoriteHotelsFailure
  | VoteFavoriteHotels
  | VoteFavoriteHotelsSuccess
  | VoteFavoriteHotelsFailure
  | RemoveFavoriteHotels
  | RemoveFavoriteHotelsSuccess
  | RemoveFavoriteHotelsFailure;
