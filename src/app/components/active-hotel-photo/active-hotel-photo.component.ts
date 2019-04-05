import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-hotel-photo',
  templateUrl: './active-hotel-photo.component.html',
  styleUrls: ['./active-hotel-photo.component.css']
})
export class ActiveHotelPhotoComponent implements OnInit {
  @Input() public src: string;
  @Input() public description: string;
  public constructor() {}

  public ngOnInit(): void {
  }

}
