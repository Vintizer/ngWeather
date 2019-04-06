import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from './../environments/environment';
import { IHotel } from './models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  public hotels$: Subject<IHotel[]> = new Subject();
  public allHotels$: Subject<IHotel[]> = new Subject();
  private configUrl: string = environment.configUrl;
  public constructor(private http: HttpClient) {}
  public getHotels(page: number = 0, limit: number = 20): void {
    this.http
      .get(`${this.configUrl}hotels?_page=${page + 1}&_limit=${limit}`)
      .subscribe((hotels: IHotel[]) => this.hotels$.next(hotels));
  }
  public getAllHotels(): void {
    this.http
      .get(`${this.configUrl}hotels`)
      .subscribe((hotels: IHotel[]) => this.allHotels$.next(hotels));
  }
  public removeHotel(id: number): void {
    this.http
      .delete(`${this.configUrl}hotels/${id}`)
      .subscribe(() => {
        this.getHotels();
        this.getAllHotels();
      });
  }
}
