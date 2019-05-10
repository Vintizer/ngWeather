import {
  HotelActions,
  SetStarFilter,
  SetTextFilter
} from './../../store/actions/hotel.actions';
import { Store } from '@ngrx/store';
import { IState } from './../../store/reducers/index';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
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

  public constructor(
    private filterService: FilterService,
    private store: Store<IState>
  ) {}

  public ngOnInit(): void {
    // TODO
    this.subscription = this.filterService.starsEvent.subscribe(
      (stars: string[]) => (this.star = stars)
    );
  }
  public changeFilter(event: KeyboardEvent): void {
    this.store.dispatch(
      new SetTextFilter((event.target as HTMLInputElement).value)
    );
  }
  public addStarFilter(filterName: string): void {
    this.store.dispatch(
      new SetStarFilter(filterName)
    );
  }
  public trackByFn(_i: number, star: string): string {
    return star;
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
