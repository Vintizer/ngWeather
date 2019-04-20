import { IHotel } from './../../models/hotel';
import { HotelsService } from './../../hotels.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  public hotel: IHotel;
  public constructor(
    private ar: ActivatedRoute,
    private hotelsService: HotelsService
  ) {}

  public ngOnInit(): void {
    const curHotelId: string = this.ar.snapshot.paramMap.get('id');
    this.hotelsService
      .getHotelById(curHotelId)
      .subscribe((hotel: IHotel) => (this.hotel = hotel));
  }
}
