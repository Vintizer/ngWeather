import { FilterService } from './../services/filter.service';
import { IHotel } from './../models/hotel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {
  public starFilter: string[] = ['3', '4', '5'];
  public constructor(private filterService: FilterService) {
    this.filterService.starsEvent.subscribe((stars: string[]) => {
      this.starFilter = stars;
    });
  }

  public ngOnInit(): void {  }
  public transform(value: IHotel[]): IHotel[] {
    if (!value) {
      return value;
    }
    return value.filter((hotel: IHotel) => this.starFilter.includes(hotel.stars.toString()));
  }
}
