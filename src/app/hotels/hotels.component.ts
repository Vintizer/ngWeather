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
  filteredHotels: IHotel[] = this.hotels;
  starsFilter: string[] = ["3", "4", "5"];
  filterText: string='';
  constructor(private hotelsService: HotelsService) {}

  ngOnInit() {
    setTimeout(() => {
      this.hotelsService.getHotels().subscribe(data => {
        this.hotels = data;
        this.filteredHotels = data;
      });
      this.activeHotel = this.hotels.find(hotel => hotel.id === 0);
    }, 1000);
  }
  private setActiveHotel(activeHotelId: number) {
    this.activeHotel = this.hotels.find(hotel => hotel.id === activeHotelId);
  }
  private filter() {
    this.filteredHotels = this.hotels.filter(hotel => {
      const isDescr: boolean = (hotel.description || "").toUpperCase().includes(this.filterText.toUpperCase());
      const isTitle: boolean = (hotel.title || "").toUpperCase().includes(this.filterText.toUpperCase());
      const isStars: boolean = this.starsFilter.includes(hotel.stars.toString())
      return isStars && (isDescr || isTitle);
    });
  }
  setThisActive = this.setActiveHotel.bind(this);
  private setFilter(filterText: string) {
    this.filterText = filterText;
    this.filter();
  }
  setThisFilter = this.setFilter.bind(this);
  private setStarsFilter(starsFilter: string) {
    if (this.starsFilter.includes(starsFilter)) {
      this.starsFilter = this.starsFilter.filter(star => star !== starsFilter);
    } else {
      this.starsFilter.push(starsFilter);
    }
    this.filter();
  }
  setThisStarsFilter = this.setStarsFilter.bind(this);
}
