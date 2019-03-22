import { EventEmitter, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

import { IHotel } from './../models/hotel';
import { FilterService } from './../services/filter.service';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform, OnDestroy {
  public filterText: string = '';
  public starFilter: string[] = ['3', '4', '5'];
  private subscription: Subscription;

  public constructor(private filterService: FilterService) {
    this.subscription = this.filterService.description.subscribe(
      (text: string) => {
        this.filterText = text;
      }
    );
    const starSubscription: Subscription = this.filterService.starsEvent.subscribe(
      (stars: string[]) => {
        this.starFilter = stars;
      }
    );
    this.subscription.add(starSubscription);
  }
  public transform(value: IHotel[]): IHotel[] {
    if (!value || (!this.filterText && this.starFilter.length === 3)) {
      return value;
    }
    const filtered: IHotel[] = value.filter((hotel: IHotel) => {
      const isStarEquals: boolean = this.starFilter.includes(
        hotel.stars.toString()
      );
      const isTextEqual: boolean =
        hotel.description
          .toUpperCase()
          .includes(this.filterText.toUpperCase()) ||
        hotel.title.toUpperCase().includes(this.filterText.toUpperCase());
      return isStarEquals && isTextEqual;
    });
    return filtered;
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
