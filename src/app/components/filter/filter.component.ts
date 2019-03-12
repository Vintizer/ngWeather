import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() public setFilter: (filterText: string) => void;
  @Input() public setStars: (filterText: string) => void;
  @Input() public starsFilter: string[];
  public constructor() {}

  public ngOnInit(): void {}
  public changeFilter(e: Event): void {
    this.setFilter(e.target.value);
  }
  public addStarFilter(filterName: string): void {
    if (filterName === 'All') {
      const curStars: string[] = this.starsFilter;
      if (curStars.length < 3) {
        if (!curStars.includes('3')) {
          this.setStars('3');
        }
        if (!curStars.includes('4')) {
          this.setStars('4');
        }
        if (!curStars.includes('5')) {
          this.setStars('5');
        }
      } else {
        this.setStars('3');
        this.setStars('4');
        this.setStars('5');
      }
    } else {
      this.setStars(filterName);
    }
  }
}
