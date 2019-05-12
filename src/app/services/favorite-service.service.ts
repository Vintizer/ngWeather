import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import {
  IFavoriteHotel,
  IFavoriteView,
  IHotelView,
  IJsonResponse,
  ResponseType
} from './../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public favorites$: BehaviorSubject<IJsonResponse> = new BehaviorSubject({
    data: [],
    type: ResponseType.initialize
  });
  private favorites: IFavoriteView[] = [];
  private configUrl: string = environment.configUrl;

  public constructor(private http: HttpClient) {
    this.http
      .get(`${this.configUrl}favorites`)
      .subscribe((favArr: IFavoriteView[]) => {
        this.favorites = favArr;
        this.favorites$.next({
          data: this.favorites,
          type: ResponseType.initialize
        });
      });
  }
  public addFavorite(hotel: IHotelView): Observable<IFavoriteView> {
    const newFavoriteHotel: IFavoriteView = Object.assign({
      ...hotel,
      voted: 1
    });
    return this.http.post<IFavoriteView>(
      `${this.configUrl}favorites/`,
      newFavoriteHotel
    );
  }
  public voteFavorite(favHotel: IFavoriteView): Observable<IFavoriteView> {
    return this.http.patch<IFavoriteView>(
      `${this.configUrl}favorites/${favHotel.id}`,
      {
        voted: favHotel.voted + 1
      }
    );
  }

  public getFavorites(): Observable<IFavoriteView[]> {
    return this.http.get<IFavoriteView[]>(`${this.configUrl}favorites`);
  }
  public removeFromFavorites(id: number): Observable<any> {
    return this.http.delete(`${this.configUrl}favorites/${id}`);
  }
  public removeFromFavoritesOld(id: number): void {
    this.http.delete(`${this.configUrl}favorites/${id}`).subscribe(() => {
      this.favorites = this.favorites.filter(
        (fav: IFavoriteView) => fav.id !== id
      );
      this.favorites$.next({
        data: this.favorites,
        type: ResponseType.remove
      });
    });
  }
  public clearFavorites(): void {
    this.favorites = [];
  }
  public isHotelInFavorite(hotelId: number): boolean {
    return Boolean(
      this.favorites.find((fav: IFavoriteView) => fav.id === hotelId)
    );
  }
  public clickFavoriteOld(hotel: IHotelView): void {
    const thisFavHotel: IFavoriteView | null =
      this.favorites.find((fav: IFavoriteHotel) => fav.id === hotel.id) || null;
    if (thisFavHotel) {
      this.http
        .patch(`${this.configUrl}favorites/${thisFavHotel.id}`, {
          voted: thisFavHotel.voted + 1
        })
        .subscribe((patchedFav: IFavoriteView) => {
          this.favorites = this.favorites.map((fav: IFavoriteView) =>
            fav.id === patchedFav.id ? patchedFav : fav
          );
          this.favorites$.next({
            data: this.favorites,
            type: ResponseType.vote
          });
        });
    } else {
      const newFavoriteHotel: IFavoriteView = Object.assign({
        ...hotel,
        voted: 1
      });
      this.http
        .post(`${this.configUrl}favorites/`, newFavoriteHotel)
        .subscribe((newFav: IFavoriteView) => {
          this.favorites = [...this.favorites, newFav];
          this.favorites$.next({
            data: this.favorites,
            type: ResponseType.add
          });
        });
    }
  }
}
