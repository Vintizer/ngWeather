import { SetStarFilter } from './../../store/actions/hotel.actions';
import { IState } from './../../store/reducers/index';
import { select, Store } from '@ngrx/store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { starSelector } from 'src/app/store/reducers/hotel.reducer';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() public starsCount: string;
  public starsClass: Observable<boolean>;

  public starArray: number[];

  public constructor(
    private store: Store<IState>
  ) {}

  public ngOnInit(): void {
    this.starArray = Array.from(Array(Number(this.starsCount)).keys());
    this.starsClass = this.store.select(starSelector, this.starsCount);
  }
  public clickStars(): void {
    this.store.dispatch(new SetStarFilter(this.starsCount.toString()));
  }
  public trackByFn(_i: number, starLength: number): number {
    return starLength;
  }
}
