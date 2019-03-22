import { Subscription } from 'rxjs';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { IHotel, IHotelView } from './../../models/hotel';
import { FilterPipe } from './../../pipes/filter.pipe';
import { FavoriteService } from './../../services/favorite-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() public hotels: IHotel[] = [];
  @Input() public activeHotel: IHotel;
  @Input() public isLoaded: boolean;

  @Output() public setActive: EventEmitter<IHotel> = new EventEmitter();
  @Output() public favoriteAdded: EventEmitter<true> = new EventEmitter();
  public isHotelsFiltered: boolean = false;
  private subscription: Subscription;

  public constructor(
    private favService: FavoriteService,
    private notificationsService: NotificationsService,
    private pipe: FilterPipe
  ) {}

  public ngOnInit(): void {
    this.subscription = this.pipe.filterEvent.subscribe((listLength: number) => {
      console.log('listLength: ', listLength);
      this.isHotelsFiltered = Boolean(listLength);
    });
    console.log('this.pipe.filterEvent: ', this.pipe.filterEvent);
  }
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
  public ngOnDestroy(): void {
  this.subscription.unsubscribe();
  }
}
