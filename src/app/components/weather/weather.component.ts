import { IWeather } from './../../models/hotel';
import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() public weather: IWeather;
  public constructor() { }

  public ngOnInit(): void {
  }

}
