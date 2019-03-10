import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective {
  @Input() set appLoading(condition: boolean) {
    // if (!condition) {
    //   console.log('!condition: ',  this.viewContainer.element.nativeElement);
    //   this.viewContainer.element.nativeElement.innerHTML = '<p>Loading</p>'
    //   // this.viewContainer.createEmbeddedView(this.templateRef);
    // } else if (condition) {
    //   console.log('condition: ',  this.viewContainer.element.nativeElement);
    //   // this.viewContainer.clear();
    // }
  }

  constructor( private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { 
  }

  
}
