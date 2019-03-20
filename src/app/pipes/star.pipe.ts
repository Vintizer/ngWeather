import { IHotel } from './../models/hotel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {
  public transform(value: IHotel[], starFilter: string[]): IHotel[] {
    if (!value) {
      return value;
    }
    return value.filter((hotel: IHotel) => starFilter.includes(hotel.stars.toString()));
  }
}
