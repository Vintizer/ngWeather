import { FavoriteServiceService } from './../../services/favorite-service.service';
import { IFavoriteView } from './../../models/hotel';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit {
  public favoriteHotels: IFavoriteView[];
  @Output() favoriteRemoved: EventEmitter<true> = new EventEmitter();

  public constructor(private favService: FavoriteServiceService) {}
  public ngOnInit(): void {
    this.favoriteHotels = this.favService.getFavorites();
  }
  public removeFromFavorites(id: number): void {
    this.favService.removeFromFavorites(id);
    this.favoriteRemoved.emit(true);
  }
}
