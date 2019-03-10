import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  @Input() setFilter: (filterText: string) => void;
  @Input() setStars: (filterText: string) => void;
  @Input() starsFilter: string[];
  constructor() {}

  ngOnInit() {}
  changeFilter(e) {
    this.setFilter(e.target.value);
  }
  addStarFilter(filterName: string) {
    if (filterName === "All") {
      const curStars = this.starsFilter;
      if (curStars.length < 3) {
        if (!curStars.includes("3")) {
          this.setStars("3");
        }
        if (!curStars.includes("4")) {
          this.setStars("4");
        }
        if (!curStars.includes("5")) {
          this.setStars("5");
        }
      } else {
        this.setStars("3");
        this.setStars("4");
        this.setStars("5");
      }
    } else {
      this.setStars(filterName);
    }
  }
}
