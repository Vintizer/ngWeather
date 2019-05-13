import { select, Store } from '@ngrx/store';
import { IState } from './../../store/reducers/index';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { IHiglight } from './../../models/hotel';
import { Observable, Subscription } from 'rxjs';
import { textSelector } from 'src/app/store/reducers/hotel.reducer';

@Component({
  selector: 'app-text-highlight',
  templateUrl: './text-highlight.component.html',
  styleUrls: ['./text-highlight.component.css']
})
export class TextHighlightComponent implements OnInit {
  @Input() public text: string;
  public dataArray: Observable<IHiglight[]>;
  private subscription: Subscription;

  public constructor(
    private store: Store<IState>) {}

  public ngOnInit(): void {
    this.dataArray = this.store.pipe(
      select(textSelector, this.text)
    );
  }
}
