import { Store } from '@ngrx/store';
import { HotelsService } from './../../hotels.service';
import { Component, OnInit } from '@angular/core';
import { IHotelComment } from 'src/app/models/hotel';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { IState } from 'src/app/store/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotel-comments',
  templateUrl: './hotel-comments.component.html',
  styleUrls: ['./hotel-comments.component.css']
})
export class HotelCommentsComponent implements OnInit {
  public id$: Observable<string>;
  public comments: IHotelComment[];
  public constructor(
    private hotelsService: HotelsService,
    private store: Store<IState>
  ) {}

  public ngOnInit(): void {
    this.store
      .select('router', 'state', 'params')
      .pipe(
        pluck('id'),
        switchMap((id: string) => this.hotelsService.getCommentsById(id))
      )
      .subscribe((comments: IHotelComment[]) => {
        this.comments = comments;
      });
  }
}
