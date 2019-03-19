import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IFavoriteView } from './../../models/hotel';
import { FavoriteServiceService } from './../../services/favorite-service.service';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit {
  public favoriteHotels: IFavoriteView[];
  @Output() public favoriteRemoved: EventEmitter<true> = new EventEmitter();

  public constructor(private favService: FavoriteServiceService) {}
  public ngOnInit(): void {
    this.favoriteHotels = this.favService.getFavorites();
  }
  public removeHotelFromFavorites(id: number): void {
    this.favService.removeFromFavorites(id);
    this.favoriteRemoved.emit(true);
  }
  public trackByFn(_index: number, hotel: IFavoriteView): number {
    return hotel.id;
  }
}
