import { HotelsService } from './../hotels.service';
import { IHotel, IWeather, IFavoriteHotel, IFilter } from './../models/hotel';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public hotels: IHotel[] = [];
  public activeHotel: IHotel;
  public filteredHotels: IHotel[] = this.hotels;
  public constructor(
    private hotelsService: HotelsService,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit() {
    this.hotelsService.getHotels().subscribe(data => {
      this.hotels = data;
      this.filteredHotels = data;
      this.activeHotel = data[0];
    });
    this.activeHotel = this.hotels.find(hotel => hotel.id === 0);
  }

  public setActiveHotel(hotel: IHotel): void {
    this.activeHotel = hotel;
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

  public filter(filter: IFilter) {
    this.filteredHotels = this.hotels.filter(hotel =>
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
}
