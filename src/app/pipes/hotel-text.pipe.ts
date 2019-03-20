import { IHotel } from './../models/hotel';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelText'
})
export class HotelTextPipe implements PipeTransform {
  public transform(value: IHotel[], filterText: string): IHotel[] {
    if (!value || !filterText) {
      return value;
    }
    return value.filter((hotel: IHotel) => {
      return (
        hotel.description.toUpperCase().includes(filterText.toUpperCase()) ||
        hotel.title.toUpperCase().includes(filterText.toUpperCase())
      );
    });
  }
}
