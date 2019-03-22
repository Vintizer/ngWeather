import { EventEmitter, Injectable } from '@angular/core';

const initialStarValue: string[] = ['3', '4', '5'];

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public stars: string[] = initialStarValue;
  public starsEvent: EventEmitter<string[]> = new EventEmitter();
  public description: EventEmitter<string> = new EventEmitter();
  public text: string = '';

  public constructor() {}
  public setTextFilter(text: string): void {
    this.text = text;
    this.description.emit(text);
  }
  public getTextValue(): string {
    return this.text;
  }
  public setStarFilter(star: string): void {
    if (star === 'All') {
      this.stars = this.stars.length < 3 ? initialStarValue : [];
    } else {
      if (this.stars.includes(star)) {
        this.stars = this.stars.filter((starVal: string) => starVal !== star);
      } else {
        this.stars = [...this.stars, star];
      }
    }
    this.starsEvent.emit(this.stars);
  }
}
