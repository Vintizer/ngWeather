import { IHotel } from "./../../models/hotel";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() hotels: IHotel[] = [];
  @Input() activeHotel: IHotel;
  @Input() setActiveHotel: (id: number) => void;
  @Input() addToFavorites: (id: number) => void;
  constructor() {}

  ngOnInit() {}
}
