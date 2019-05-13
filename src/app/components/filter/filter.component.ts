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
import { fromEvent, Observable, Subscription } from 'rxjs';

import { IFilter } from './../../models/hotel';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

const initialStarValue: string[] = ['3', '4', '5'];

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public constructor(
    private store: Store<IState>
  ) {}

  public ngOnInit(): void {
    const inputElement: HTMLInputElement = document.querySelector('#filter') as HTMLInputElement;
    fromEvent(inputElement, 'input').pipe(
      map((event: Event) => (event.target as HTMLInputElement).value),
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((filter: string) => this.store.dispatch(
      new SetTextFilter(filter)
    ));
  }
  public addStarFilter(filterName: string): void {
    this.store.dispatch(
      new SetStarFilter(filterName)
    );
  }
  public trackByFn(_i: number, star: string): string {
    return star;
  }
}
