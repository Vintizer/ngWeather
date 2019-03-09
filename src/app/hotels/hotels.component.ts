import { HotelsService } from "./../hotels.service";
import { IHotel, IWeather } from "./../models/hotel";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hotels",
  templateUrl: "./hotels.component.html",
  styleUrls: ["./hotels.component.css"]
})
export class HotelsComponent implements OnInit {
  hotels: IHotel[];
  activeHotel: IHotel;
  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    this.hotelsService.getHotels().subscribe(data => (this.hotels = data));
    this.activeHotel = this.hotels.find(hotel => hotel.id === 0);
  }
  setActiveHotel(activeHotelId: number) {
    this.activeHotel = this.hotels.find(hotel => hotel.id === activeHotelId);
  }
  setThisActive = this.setActiveHotel.bind(this);
}
