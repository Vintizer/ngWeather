import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {
  IFavoriteView,
  IJsonResponse,
  ResponseType
} from './../../models/hotel';
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
    this.favService.favorites$.subscribe((favsAction: IJsonResponse) => {
      switch (favsAction.type) {
        case ResponseType.add:
          this.notificationsService.success('Favorite added!', '', {
            timeOut: 1000,
            clickToClose: true,
            animate: 'fade',
            showProgressBar: false
          });
          break;
        case ResponseType.remove:
          this.notificationsService.warn('Favorite removed!', '', {
            timeOut: 1000,
            clickToClose: true,
            animate: 'fade',
            showProgressBar: false
          });
          break;
        case ResponseType.vote:
          this.notificationsService.info('Your vote has been counted!', '', {
            timeOut: 1000,
            clickToClose: true,
            animate: 'fade',
            showProgressBar: false
          });
          break;
      }
      this.favoriteHotels = favsAction.data;
    });
  }
  public removeHotelFromFavorites(id: number, e: MouseEvent): void {
    e.preventDefault();
    this.favService.removeFromFavorites(id);
  }
  public trackByFn(_index: number, hotel: IFavoriteView): number {
    return hotel.id;
  }
}
