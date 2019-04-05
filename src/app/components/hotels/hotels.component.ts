import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { HotelsService } from '../../hotels.service';
import { IHotel } from '../../models/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit, OnDestroy {
  public hotels: IHotel[] = [];
  public activeHotel: IHotel;
  public filteredHotels: IHotel[] = this.hotels;
  public isFirstLoadDone: boolean = false;
  private subscription: Subscription;

  public constructor(private hotelsService: HotelsService) {}

  public ngOnInit(): void {
    this.subscription = this.hotelsService
      .hotels$
      .subscribe((data: IHotel[]) => {
        this.hotels = data;
        this.filteredHotels = data;
        this.activeHotel = data[0];
        this.isFirstLoadDone = true;
      });
    this.activeHotel = this.hotels.find((hotel: IHotel) => hotel.id === 0);
  }

  public setActiveHotel(hotel: IHotel): void {
    this.activeHotel = hotel;
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
