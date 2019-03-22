import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { IFilter } from './../../models/hotel';
import { FilterService } from './../../services/filter.service';

const initialStarValue: string[] = ['3', '4', '5'];

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() public filterChange: EventEmitter<IFilter> = new EventEmitter();
  public star: string[] = initialStarValue;
  private subscription: Subscription;

  public constructor(private filterService: FilterService) {}

  public ngOnInit(): void {
    this.subscription = this.filterService.starsEvent.subscribe(
      (stars: string[]) => (this.star = stars)
    );
  }
  public changeFilter(event: KeyboardEvent): void {
    this.filterService.setTextFilter((event.target as HTMLInputElement).value);
  }
  public addStarFilter(filterName: string): void {
    this.filterService.setStarFilter(filterName);
  }
  public trackByFn(_i: number, star: string): string {
    return star;
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
