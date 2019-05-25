import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'angular2-notifications';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { IState } from 'src/app/store/reducers';

import { IFavoriteView } from './../../models/hotel';
import {
  RemoveFavoriteHotels,
  ToggleFavoriteHotels
} from './../../store/actions/favorite-hotel.actions';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit {
  public favoriteHotels: Observable<IFavoriteView[]>;
  public isOpenHotels: Observable<boolean>;
  public modalRef: BsModalRef;

  public constructor(
    private notificationsService: NotificationsService,
    private store: Store<IState>,
    private modalService: BsModalService
  ) {}
  public ngOnInit(): void {
    this.favoriteHotels = this.store.select('favoriteHotel', 'data');
    this.isOpenHotels = this.store.select('favoriteHotel', 'isOpen');
  }
  public removeHotelFromFavorites(id: number, e: MouseEvent): void {
    e.preventDefault();
    this.store.dispatch(new RemoveFavoriteHotels(id));
  }
  public trackByFn(_index: number, hotel: IFavoriteView): number {
    return hotel.id;
  }
  public toggleOpenFavorites(): void {
    this.store.dispatch(new ToggleFavoriteHotels());
  }
  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
  public hideModal(): void {
    this.modalRef.hide();
  }
}
