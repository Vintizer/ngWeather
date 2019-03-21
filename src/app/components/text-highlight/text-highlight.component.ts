import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-highlight',
  templateUrl: './text-highlight.component.html',
  styleUrls: ['./text-highlight.component.css']
})
export class TextHighlightComponent implements OnInit {
  @Input() public text: string;
  public constructor() { }

  public ngOnInit(): void {
  }

}
