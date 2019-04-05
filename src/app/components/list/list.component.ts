import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelsService } from 'src/app/hotels.service';

import { IHotel, IHotelView } from './../../models/hotel';
import { FavoriteService } from './../../services/favorite-service.service';

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
  @Output() public favoriteAdded: EventEmitter<true> = new EventEmitter();
  public hotelsLength: number;
  public pageIndex: number = 0;
  public pageSize: number = 20;

  public constructor(
    private favService: FavoriteService,
    private hotelsService: HotelsService
  ) {}

  public ngOnInit(): void {
    this.hotelsService.getHotels(this.pageIndex, this.pageSize);
    this.hotelsService
      .getAllHotels()
      .subscribe(
        (hotelsArray: IHotel[]) => (this.hotelsLength = hotelsArray.length)
      );
  }
  public setActiveHotel(hotel: IHotel): void {
    this.setActive.emit(hotel);
  }
  public addHotelToFavorites(curHotel: IHotel, event: MouseEvent): void {
    event.stopPropagation();
    const { title, id } = this.hotels.find(
      (hotel: IHotel) => hotel.id === curHotel.id
    );
    const favoriteView: IHotelView = {
      title,
      id
    };
    this.favService.clickFavorite(favoriteView);
  }
  public trackHotelsByFn(_i: number, hotel: IHotel): number {
    return hotel.id;
  }
  public trackPicturesByFn(_i: number, src: string): string {
    return src;
  }
  public isHotelInFavorite(hotel: IHotel): boolean {
    return this.favService.isHotelInFavorite(hotel.id);
  }
  public getServerData(e: any): void {
    console.log('e: ', e);
    this.hotelsService.getHotels(e.pageIndex, e.pageSize);
  }
}
