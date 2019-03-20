import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { HotelsService } from './../hotels.service';
import { IFilter, IHotel } from './../models/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public hotels: IHotel[] = [];
  public activeHotel: IHotel;
  public filteredHotels: IHotel[] = this.hotels;
  public isFirstLoadDone: boolean = false;
  public constructor(
    private hotelsService: HotelsService
  ) {}

  public ngOnInit(): void {
    this.hotelsService.getHotels().subscribe((data: IHotel[]) => {
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
}
