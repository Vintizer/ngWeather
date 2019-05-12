import { RemoveFavoriteHotels } from './../../store/actions/favorite-hotel.actions';
import { Store } from '@ngrx/store';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {
  IFavoriteView,
  IJsonResponse,
  ResponseType
} from './../../models/hotel';
import { FavoriteService } from './../../services/favorite-service.service';
import { NotificationsService } from 'angular2-notifications';
import { IState } from 'src/app/store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit {
  public favoriteHotels: Observable<IFavoriteView[]>;
  @Output() public favoriteRemoved: EventEmitter<true> = new EventEmitter();

  public constructor(
    private favService: FavoriteService,
    private notificationsService: NotificationsService,
    private store: Store<IState>
  ) {}
  public ngOnInit(): void {
    this.favoriteHotels = this.store.select('favoriteHotel', 'data');
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
      // this.favoriteHotels = favsAction.data;
    });
  }
  public removeHotelFromFavorites(id: number, e: MouseEvent): void {
    e.preventDefault();
    this.store.dispatch(new RemoveFavoriteHotels(id));
  }
  public trackByFn(_index: number, hotel: IFavoriteView): number {
    return hotel.id;
  }
}
