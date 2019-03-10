import { HotelsService } from "./../hotels.service";
import { IHotel, IWeather, IFavoriteHotel } from "./../models/hotel";
import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: "app-hotels",
  templateUrl: "./hotels.component.html",
  styleUrls: ["./hotels.component.css"]
})
export class HotelsComponent implements OnInit {
  hotels: IHotel[] = [];
  activeHotel: IHotel;
  filteredHotels: IHotel[] = this.hotels;
  starsFilter: string[] = ["3", "4", "5"];
  filterText: string = "";
  favoriteHotels: IFavoriteHotel[] = [];
  constructor(private hotelsService: HotelsService, private notificationsService: NotificationsService) {}

  ngOnInit() {
    this.hotelsService.getHotels().subscribe(data => {
      this.hotels = data;
      this.filteredHotels = data;
      this.activeHotel = data[0];
    });
    this.activeHotel = this.hotels.find(hotel => hotel.id === 0);
  }
  private setActiveHotel($event, activeHotelId: number) {
    if ($event.target.tagName !== "BUTTON") {
      this.activeHotel = this.hotels.find(hotel => hotel.id === activeHotelId);
    }
  }
  private filter() {
    this.filteredHotels = this.hotels.filter(hotel => {
      const isDescr: boolean = (hotel.description || "").toUpperCase().includes(this.filterText.toUpperCase());
      const isTitle: boolean = (hotel.title || "").toUpperCase().includes(this.filterText.toUpperCase());
      const isStars: boolean = this.starsFilter.includes(hotel.stars.toString());
      return isStars && (isDescr || isTitle);
    });
  }
  setThisActive = this.setActiveHotel.bind(this);
  private setFilter(filterText: string) {
    this.filterText = filterText;
    this.filter();
  }
  setThisFilter = this.setFilter.bind(this);
  private addToFavorites(hotelId: number) {
    const curHotel = this.hotels.find(hotel => hotel.id === hotelId);
    if (!curHotel) {
      return;
    }
    const hotelInFavorite = this.favoriteHotels.find(hotel => hotel.id === hotelId);
    if (!Boolean(hotelInFavorite)) {
      const newFavoriteHotel: IFavoriteHotel = Object.assign({}, curHotel, { voted: 1 });
      this.favoriteHotels.push(newFavoriteHotel);
      this.notificationsService.success("Favorite added!", "", {
        timeOut: 1000,
        clickToClose: true,
        animate: "fade",
        showProgressBar: false
      });
    } else {
      hotelInFavorite.voted++;
    }
  }
  addThisToFavorites = this.addToFavorites.bind(this);
  private removeFromFavorites(hotelId: number) {
    this.favoriteHotels = this.favoriteHotels.filter(hotel => hotel.id !== hotelId);
    this.notificationsService.warn("Favorite removed!", "", {
      timeOut: 1000,
      clickToClose: true,
      animate: "fade",
      showProgressBar: false
    });
  }
  removeThisFromFavorites = this.removeFromFavorites.bind(this);
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
