import { FilterService } from './../../services/filter.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IHotel, IHotelView } from './../../models/hotel';
import { FavoriteService } from './../../services/favorite-service.service';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() public hotels: IHotel[] = [];
  @Input() public activeHotel: IHotel;
  @Input() public isLoaded: boolean;

  @Output() public setActive: EventEmitter<IHotel> = new EventEmitter();
  @Output() public favoriteAdded: EventEmitter<true> = new EventEmitter();


  public constructor(
    private favService: FavoriteService,
    private notificationsService: NotificationsService,
  ) {}

  public ngOnInit(): void {  }
  public setActiveHotel(hotel: IHotel): void {
    this.setActive.emit(hotel);
  }
  public addHotelToFavorites(curHotel: IHotel, event: MouseEvent): void {
    event.stopPropagation();
    const { title, id } = this.hotels.find(
      (hotel: IHotel) => hotel.id === curHotel.id
    );
    const favoriteView: IHotelView = {
      title,
      id
    };
    if (this.favService.isHotelInFavorite(favoriteView.id)) {
      this.notificationsService.info('Your vote has been counted!', '', {
        timeOut: 1000,
        clickToClose: true,
        animate: 'fade',
        showProgressBar: false
      });
    } else {
      this.notificationsService.success('Favorite added!', '', {
        timeOut: 1000,
        clickToClose: true,
        animate: 'fade',
        showProgressBar: false
      });
    }
    this.favService.clickFavorite(favoriteView);
  }
  public trackHotelsByFn(_i: number, hotel: IHotel): number {
    return hotel.id;
  }
  public trackPicturesByFn(_i: number, src: string): string {
    return src;
  }
  public isHotelInFavorite(hotel: IHotel): boolean {
    return this.favService.isHotelInFavorite(hotel.id);
  }
}
