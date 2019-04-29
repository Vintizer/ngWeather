import { HotelsService } from './../../hotels.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IHotelComment } from 'src/app/models/hotel';

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
    private router: Router
  ) {}

  public ngOnInit(): void {
    const routerSplitted: string[] = this.router.url.split('/');
    const hotelId: string = routerSplitted[routerSplitted.length - 2];
    this.hotelsService.getCommentsById(hotelId).subscribe((comments: IHotelComment[]) => {
      this.comments = comments;
    });
  }
}
