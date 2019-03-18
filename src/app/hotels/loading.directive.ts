import { LoadingComponent } from './../components/loading/loading.component';
import {
  Directive,
  OnInit,
  Input,
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver,
  ComponentFactory
} from '@angular/core';

@Directive({
  selector: '[loadElse]'
})
export class LoadingDirective implements OnInit {
  private _condition: boolean;

  @Input()
  set loadElse(condition: any) {
    this._condition = condition;
    this._updateView();
  }

  public constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>,
    private cfr: ComponentFactoryResolver
  ) {}
  private _updateView(): void {
    console.log('this._condition: ', this._condition);
    if (this._condition) {
      this.view.clear();
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
      const loadComponent: ComponentFactory<LoadingComponent> = this.cfr.resolveComponentFactory(LoadingComponent);
      this.view.createComponent(loadComponent);
    }
  }
  public ngOnInit(): void {
   
  }
}
