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
    private hotelsService: HotelsService,
    private notificationsService: NotificationsService
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

  public filter(filter: IFilter): void {
    this.filteredHotels = this.hotels.filter((hotel: IHotel) =>
      this.isHotelFiltered(hotel, filter)
    );
  }

  public favoriteAdded(): void {
    this.notificationsService.success('Favorite added!', '', {
      timeOut: 1000,
      clickToClose: true,
      animate: 'fade',
      showProgressBar: false
    });
  }
  public favoriteRemoved(): void {
    this.notificationsService.warn('Favorite removed!', '', {
      timeOut: 1000,
      clickToClose: true,
      animate: 'fade',
      showProgressBar: false
    });
  }
  private isHotelFiltered(hotel: IHotel, filter: IFilter): boolean {
    const isDescr: boolean = (hotel.description || '')
      .toUpperCase()
      .includes(filter.inputFilter.toUpperCase());
    const isTitle: boolean = (hotel.title || '')
      .toUpperCase()
      .includes(filter.inputFilter.toUpperCase());
    const isStars: boolean = filter.star.includes(hotel.stars.toString());
    return isStars && (isDescr || isTitle);
  }
}
