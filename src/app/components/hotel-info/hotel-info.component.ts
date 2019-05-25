import { IHotel } from './../../models/hotel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {
  @Input() public activeHotel: IHotel;
  public constructor() {}

  ngOnInit() {}
}
