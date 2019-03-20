import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IFavoriteView } from './../../models/hotel';
import { FavoriteService } from './../../services/favorite-service.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit {
  public favoriteHotels: IFavoriteView[];
  @Output() public favoriteRemoved: EventEmitter<true> = new EventEmitter();

  public constructor(
    private favService: FavoriteService,
    private notificationsService: NotificationsService
    ) {}
  public ngOnInit(): void {
    this.favoriteHotels = this.favService.getFavorites();
  }
  public removeHotelFromFavorites(id: number): void {
    this.favService.removeFromFavorites(id);
    this.notificationsService.warn('Favorite removed!', '', {
      timeOut: 1000,
      clickToClose: true,
      animate: 'fade',
      showProgressBar: false
    });
  }
  public trackByFn(_index: number, hotel: IFavoriteView): number {
    return hotel.id;
  }
}
