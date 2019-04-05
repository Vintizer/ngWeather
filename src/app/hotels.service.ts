import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from './../environments/environment';

import { IHotel } from './models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  public hotels$: Subject<IHotel[]> = new Subject();
  private configUrl: string = environment.configUrl;
  public constructor(private http: HttpClient) { }
  public getHotels(page: number = 0, limit: number = 20): void {
    this.http
      .get(`${this.configUrl}hotels?_page=${page + 1}&_limit=${limit}`)
      .subscribe((hotels: IHotel[]) => this.hotels$.next(hotels));
  }
  public getAllHotels(): Observable<IHotel[]> {
    return this.http.get(`${this.configUrl}hotels`) as Observable<IHotel[]>;
  }
}