import { HotelsService } from './../../hotels.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IHotelComment } from 'src/app/models/hotel';
import { pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-comments',
  templateUrl: './hotel-comments.component.html',
  styleUrls: ['./hotel-comments.component.css']
})
export class HotelCommentsComponent implements OnInit {
  public id: string;
  public comments: IHotelComment[];
  public constructor(
    private hotelsService: HotelsService,
    private router: Router,
    private ar: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.ar.parent.params
      .pipe(
        pluck('id'),
        switchMap((id: string) => this.hotelsService.getCommentsById(id))
      )
      .subscribe((comments: IHotelComment[]) => {
        this.comments = comments;
      });
  }
}
