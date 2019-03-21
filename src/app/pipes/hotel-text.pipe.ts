import { FilterService } from './../services/filter.service';
import { IHotel } from './../models/hotel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelText',
  pure: false
})
export class HotelTextPipe implements PipeTransform {
  public filterText: string = '';
  public constructor(private filterService: FilterService) {
    this.filterService.description.subscribe((text: string) => {
      this.filterText = text;
    });
  }
  public transform(value: IHotel[]): IHotel[] {
    if (!value || !this.filterText) {
      return value;
    }
    return value.filter((hotel: IHotel) => {
      return (
        hotel.description
          .toUpperCase()
          .includes(this.filterText.toUpperCase()) ||
        hotel.title.toUpperCase().includes(this.filterText.toUpperCase())
      );
    });
  }
}
