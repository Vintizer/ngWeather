import { FilterService } from './../services/filter.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highliter',
  pure: false
})
export class HighliterPipe implements PipeTransform {
  public filterText: string = '';
  public constructor(private filterService: FilterService) {
    this.filterService.description.subscribe((text: string) => {
      this.filterText = text;
    });
  }

  public transform(value: string): string {
    return value + this.filterText;
  }
}
