import {
  IFavoriteHotel,
  IFavoriteView,
  IHotelView
} from './../models/hotel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public favorites: IFavoriteView[] = [];
  public constructor() {}
  public clickFavorite(hotel: IHotelView): void {
    if (
      Boolean(this.favorites.find((fav: IFavoriteHotel) => fav.id === hotel.id))
    ) {
      this.favorites.find((fav: IFavoriteHotel) => fav.id === hotel.id).voted++;
    } else {
      const newFavoriteHotel: IFavoriteView = Object.assign({
        ...hotel,
        voted: 1
      });
      this.favorites.push(newFavoriteHotel);
    }
  }
  public getFavorites(): IFavoriteView[] {
    return this.favorites;
  }
  public removeFromFavorites(id: number): void {
    const favIndex: number = this.favorites.indexOf(
      this.favorites.find((fav: IFavoriteHotel) => fav.id === id)
    );
    this.favorites.splice(favIndex, 1);
  }
  public clearFavorites(): void {
    this.favorites = [];
  }
  public isHotelInFavorite(hotelId: number): boolean {
    return Boolean(this.favorites.find((fav: IFavoriteView) => fav.id === hotelId));
  }
}
