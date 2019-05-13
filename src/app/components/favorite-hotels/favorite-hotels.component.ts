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

  public constructor(
    private notificationsService: NotificationsService,
    private store: Store<IState>
  ) {}
  public ngOnInit(): void {
    this.favoriteHotels = this.store.select('favoriteHotel', 'data');
  }
  public removeHotelFromFavorites(id: number, e: MouseEvent): void {
    e.preventDefault();
    this.store.dispatch(new RemoveFavoriteHotels(id));
  }
  public trackByFn(_index: number, hotel: IFavoriteView): number {
    return hotel.id;
  }
}
