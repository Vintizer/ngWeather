import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelText'
})
export class HotelTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
