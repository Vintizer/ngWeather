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
  private configUrl: string = environment.configUrl;

  public constructor(private http: HttpClient) {
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
  public removeFromFavorites(id: number): Observable<{}> {
    return this.http.delete(`${this.configUrl}favorites/${id}`);
  }
}
