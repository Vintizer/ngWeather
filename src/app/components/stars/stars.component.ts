import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() public starsCount: number;
  @Input() public starsClass: boolean;
  public starArray: number[];

  public constructor() { }

  public ngOnInit(): void {
    this.starArray = Array.from(Array(this.starsCount).keys());
  }

}
