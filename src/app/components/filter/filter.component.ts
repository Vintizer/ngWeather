import { IFilter } from './../../models/hotel';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

const initialStarValue: string[] = ['3', '4', '5'];

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public star: string[] = initialStarValue;
  public inputFilter: string = '';
  @Output() public filterChange: EventEmitter<IFilter> = new EventEmitter();

  public constructor() {}

  public ngOnInit(): void {}
  public filter(): void {
    this.filterChange.emit({
      star: this.star,
      inputFilter: this.inputFilter
    });
  }
  public changeFilter(e: Event): void {
    this.inputFilter = e.target['value'];
    this.filter();
  }
  public addStarFilter(filterName: string): void {
    if (filterName === 'All') {
      const curStars: string[] = this.star;
      if (curStars.length < 3) {
        this.star = initialStarValue;
      } else {
        this.star = [];
      }
    } else {
      if (this.star.includes(filterName)) {
        this.star = this.star.filter(
          (starVal: string) => starVal !== filterName
        );
      } else {
        this.star.push(filterName);
      }
    }
    this.filter();
  }
}
