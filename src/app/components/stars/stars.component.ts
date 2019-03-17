import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input() public starsCount: string;
  @Input() public starsClass: boolean;
  @Output() starsClicked: EventEmitter<string> = new EventEmitter();

  public starArray: number[];

  public constructor() { }

  public ngOnInit(): void {
    this.starArray = Array.from(Array(Number(this.starsCount)).keys());
  }
  public clickStars(): void {
    this.starsClicked.emit(this.starsCount.toString());
  }
}
