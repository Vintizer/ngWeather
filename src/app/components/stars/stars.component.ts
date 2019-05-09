import { SetStarFilter } from './../../store/actions/hotel.actions';
import { State } from './../../store/reducers/index';
import { Store } from '@ngrx/store';
import { FilterService } from './../../services/filter.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() public starsCount: string;
  @Input() public starsClass: boolean;
  @Output() public starsClicked: EventEmitter<string> = new EventEmitter();

  public starArray: number[];

  public constructor(
    private filterService: FilterService,
    private store: Store<State>
  ) {}

  public ngOnInit(): void {
    this.starArray = Array.from(Array(Number(this.starsCount)).keys());
  }
  public clickStars(): void {
    this.store.dispatch(new SetStarFilter(this.starsCount.toString()));
  }
  public trackByFn(_i: number, starLength: number): number {
    return starLength;
  }
}
