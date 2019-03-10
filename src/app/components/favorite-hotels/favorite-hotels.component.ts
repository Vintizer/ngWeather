import { IFavoriteHotel } from './../../models/hotel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit {
  @Input() favoriteHotels: IFavoriteHotel[];
  @Input() removeFromFavorites: (id: number) => {};
  constructor() { }

  ngOnInit() {
  }

}
