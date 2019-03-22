import { FilterService } from './../../services/filter.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { IHiglight } from './../../models/hotel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text-highlight',
  templateUrl: './text-highlight.component.html',
  styleUrls: ['./text-highlight.component.css']
})
export class TextHighlightComponent implements OnInit, OnDestroy {
  @Input() public text: string;
  public dataArray: IHiglight[] = [];
  private subscription: Subscription;

  public constructor(private filterService: FilterService) {}

  public ngOnInit(): void {
    this.highlight(this.filterService.getTextValue());
    this.subscription = this.filterService.description.subscribe(
      (text: string) => this.highlight(text)
    );
  }
  public highlight(filterText: string): void {
    const isTextNeedHighlight: boolean =
      this.text.toUpperCase().indexOf(filterText.toUpperCase()) > -1;
    if (!filterText || !isTextNeedHighlight) {
      this.dataArray = [{ text: this.text, isHighlight: false }];
    } else {
      this.dataArray = [];
      let index: number = 0;
      while (index !== -1) {
        const foundIndex: number = this.text
          .toUpperCase()
          .indexOf(filterText.toUpperCase(), index);
        if (foundIndex > -1) {
          this.dataArray.push({
            text: this.text.slice(index, foundIndex),
            isHighlight: false
          });
          this.dataArray.push({
            text: this.text.slice(foundIndex, foundIndex + filterText.length),
            isHighlight: true
          });
          index = foundIndex + 1;
        } else {
          this.dataArray.push({
            text: this.text.slice(index + filterText.length - 1),
            isHighlight: false
          });
          index = -1;
        }
      }
    }
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
