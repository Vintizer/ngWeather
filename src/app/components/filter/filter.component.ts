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
  @Output() public filterChange: EventEmitter<IFilter> = new EventEmitter();
  private star: string[] = initialStarValue;
  private inputFilter: string = '';

  public constructor() {}

  public ngOnInit(): void {}
  public filter(): void {
    this.filterChange.emit({
      star: this.star,
      inputFilter: this.inputFilter
    });
  }
  public changeFilter(e: Event): void {
    this.inputFilter = (e.target as HTMLInputElement).value;
    this.filter();
  }
  public addStarFilter(filterName: string): void {
    if (filterName === 'All') {
      this.star = this.star.length < 3 ? initialStarValue : [];
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
