import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { environment } from './../environments/environment';
import { IHotel, IHotelComment } from './models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private configUrl: string = environment.configUrl;
  public constructor(private http: HttpClient) {}
  public getHotelsObservable(
    page: number = 0,
    limit: number = 20
  ): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(
      `${this.configUrl}hotels?_page=${page + 1}&_limit=${limit}`
    );
  }
  public getHotelById(id: string): Observable<IHotel> {
    return this.http.get(`${this.configUrl}hotels/${id}`) as Observable<IHotel>;
  }
  public getCommentsById(id: string): Observable<IHotelComment[]> {
    return this.http.get(
      `${this.configUrl}comments?hotel_id=${id}`
    ) as Observable<IHotelComment[]>;
  }
  public getAllHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(`${this.configUrl}hotels`);
  }
  public removeHotel(id: number): Observable<{}> {
    return this.http.delete(`${this.configUrl}hotels/${id}`);
  }
}
