import { Component, Input, OnInit } from '@angular/core';

import { IFavoriteHotel } from './../../models/hotel';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.css']
})
export class FavoriteHotelsComponent implements OnInit {
  @Input() public favoriteHotels: IFavoriteHotel[];
  @Input() public removeFromFavorites: (id: number) => {};
  public constructor() {}

  public ngOnInit(): void {}
}
