import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { HotelsService } from './../hotels.service';
import { IFavoriteHotel, IHotel, IFilter } from './../models/hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public hotels: IHotel[] = [];
  public activeHotel: IHotel;
  public filteredHotels: IHotel[] = this.hotels;
  public starsFilter: string[] = ['3', '4', '5'];
  public filterText: string = '';
  public filterData: IFilter = {
    star: ['3', '4', '5'],
    inputFilter: ''
  };
  public favoriteHotels: IFavoriteHotel[] = [];
  public setThisActive: () => void = this.setActiveHotel.bind(this);
  // public setThisFilter: () => void = this.setFilter.bind(this);
  public addThisToFavorites: () => void = this.addToFavorites.bind(this);
  public removeThisFromFavorites: () => void = this.removeFromFavorites.bind(this);
  public setThisStarsFilter: () => void = this.setStarsFilter.bind(this);
  public constructor(
    private hotelsService: HotelsService,
    private notificationsService: NotificationsService
  ) {}

  public ngOnInit(): void {
    this.hotelsService.getHotels().subscribe((data: IHotel[]) => {
      this.hotels = data;
      this.filteredHotels = data;
      this.activeHotel = data[0];
    });
    this.activeHotel = this.hotels.find((hotel: IHotel) => hotel.id === 0);
  }
  private setActiveHotel($event: MouseEvent, activeHotelId: number): void {
    if ($event.target['tagName'] !== 'BUTTON') {
      this.activeHotel = this.hotels.find(
        (hotel: IHotel) => hotel.id === activeHotelId
      );
    }
  }
  private filter(e): void {
    console.log('e: ', e);
    // this.filteredHotels = this.hotels.filter((hotel: IHotel) => {
    //   const isDescr: boolean = (hotel.description || '')
    //     .toUpperCase()
    //     .includes(this.filterData.inputFilter.toUpperCase());
    //   const isTitle: boolean = (hotel.title || '')
    //     .toUpperCase()
    //     .includes(this.filterData.inputFilter.toUpperCase());
    //   const isStars: boolean = this.filterData.star.includes(
    //     hotel.stars.toString()
    //   );
    //   return isStars && (isDescr || isTitle);
    // });
  }
  // private setFilter(filterText: string): void {
  //   this.filterText = filterText;
  //   this.filter();
  // }
  private addToFavorites(hotelId: number): void {
    const curHotel: IHotel = this.hotels.find((hotel: IHotel) => hotel.id === hotelId);
    if (!curHotel) {
      return;
    }
    const hotelInFavorite: IFavoriteHotel = this.favoriteHotels.find(
      (hotel: IHotel) => hotel.id === hotelId
    );
    if (!Boolean(hotelInFavorite)) {
      const newFavoriteHotel: IFavoriteHotel = Object.assign({}, curHotel, {
        voted: 1
      });
      this.favoriteHotels.push(newFavoriteHotel);
      this.notificationsService.success('Favorite added!', '', {
        timeOut: 1000,
        clickToClose: true,
        animate: 'fade',
        showProgressBar: false
      });
    } else {
      hotelInFavorite.voted++;
    }
  }

  private removeFromFavorites(hotelId: number): void {
    this.favoriteHotels = this.favoriteHotels.filter(
      (hotel: IHotel) => hotel.id !== hotelId
    );
    this.notificationsService.warn('Favorite removed!', '', {
      timeOut: 1000,
      clickToClose: true,
      animate: 'fade',
      showProgressBar: false
    });
  }

  private setStarsFilter(starsFilter: string): void {
    if (this.starsFilter.includes(starsFilter)) {
      this.starsFilter = this.starsFilter.filter((star: string) => star !== starsFilter);
    } else {
      this.starsFilter.push(starsFilter);
    }
    // this.filter();
  }
}
