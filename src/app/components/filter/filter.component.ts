import { FilterService } from './../../services/filter.service';
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
  public star: string[] = initialStarValue;

  public constructor(private filterService: FilterService) {}

  public ngOnInit(): void {
    this.filterService.starsEvent.subscribe(
      (stars: string[]) => (this.star = stars)
    );
  }
  public changeFilter(event: KeyboardEvent): void {
    this.filterService.setTextFilter((event.target as HTMLInputElement).value);
  }
  public addStarFilter(filterName: string): void {
    this.filterService.setStarFilter(filterName);
  }
  public trackByFn(_i: number, star: string): string {
    return star;
  }
}
