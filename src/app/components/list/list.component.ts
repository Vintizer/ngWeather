import { Component, Input, OnInit } from '@angular/core';

import { IHotel } from './../../models/hotel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() public hotels: IHotel[] = [];
  @Input() public activeHotel: IHotel;
  @Input() public setActiveHotel: (id: number) => void;
  @Input() public addToFavorites: (id: number) => void;
  public constructor() {}

  public ngOnInit(): void {}
}
