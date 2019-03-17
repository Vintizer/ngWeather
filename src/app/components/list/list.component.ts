import { FavoriteServiceService } from './../../services/favorite-service.service';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

import { IHotel, IFavoriteView, IHotelView } from './../../models/hotel';

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
  @Output() favoriteAdded: EventEmitter<true> = new EventEmitter();

  public constructor(private favService: FavoriteServiceService) {}

  public ngOnInit(): void {}
  setActiveHotel($event: MouseEvent, hotel: IHotel): void {
    if (($event.target as HTMLElement).tagName !== 'BUTTON') {
      this.setActive.emit(hotel);
    }
  }
  addToFavorites(hotelId: number): void {
    const { title, id } = this.hotels.find(hotel => hotel.id === hotelId);
    const favoriteView: IHotelView = {
      title,
      id
    };
    this.favService.clickFavorite(favoriteView);
    this.favoriteAdded.emit(true);
  }
}
