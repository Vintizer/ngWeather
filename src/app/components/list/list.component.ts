import { LoadHotels } from './../../store/actions/hotel.actions';
import { Store } from '@ngrx/store';
import { IHotelState } from './../../store/reducers/hotel.reducer';
import { ActivatedRoute, Router } from '@angular/router';
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
  public isAdmin: boolean;
  public pageIndex: number = 0;
  public pageSize: number = 20;

  public constructor(
    private favService: FavoriteService,
    private hotelsService: HotelsService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<IHotelState>
  ) {}

  public ngOnInit(): void {
    this.pageIndex = +this.route.snapshot.paramMap.get('pageIndex');
    this.pageSize = +this.route.snapshot.paramMap.get('pageSize');
    this.hotelsService.getHotels(this.pageIndex, this.pageSize);
    this.hotelsService.getAllHotels();
    this.hotelsService.allHotels$.subscribe((hotelsArray: IHotel[]) => {
      this.hotelsLength = hotelsArray.length;
    });
    this.isAdmin = Boolean(sessionStorage.getItem('isAdmin'));
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
  public goToPage(e: any): void {
    const { pageIndex, pageSize } = e;
    this.router.navigate(['/hotels', { pageIndex, pageSize }]);
    this.store.dispatch(new LoadHotels({ page: pageIndex, limit: pageSize }));
  }
  public removeHotel(id: number, event: MouseEvent): void {
    event.stopPropagation();
    this.hotelsService.removeHotel(id);
  }
}
