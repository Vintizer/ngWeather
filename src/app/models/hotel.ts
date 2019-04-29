export interface IFilter {
  star: string[];
  inputFilter: string;
}
export interface IWeather {
  temperature: number;
  wind: number;
  icon: string;
}
export interface IProfile {
  followers: number;
  following: number;
  photo: string;
}
export interface IHotel {
  id: number;
  title: string;
  address: string;
  description: string;
  phone: string;
  picture: string;
  photos: string[];
  weather: IWeather;
  profile: IProfile;
  stars: number;
}
export interface IFavoriteHotel extends IHotel {
  voted: number;
}
export interface IFavoriteView {
  voted: number;
  title: string;
  id: number;
}
export interface IHotelView {
  title: string;
  id: number;
}
export interface IHotelComment {
  hotel_id: string;
  comment: string;
}
export interface IHiglightPipe {
  value: string;
  filter: string;
}
export interface IHiglight {
  text: string;
  isHighlight: boolean;
}
export enum ResponseType {
  add,
  remove,
  vote,
  error,
  initialize = 'initialize'
}
export interface IJsonResponse {
  data: IFavoriteView[];
  type: ResponseType;
}
