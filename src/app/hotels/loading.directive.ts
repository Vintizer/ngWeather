import {
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { LoadingComponent } from './../components/loading/loading.component';

@Directive({
  selector: '[loadElse]'
})
export class LoadingDirective implements OnInit {
  private _condition: boolean;

  @Input()
  public set loadElse(condition: any) {
    this._condition = condition;
    this._updateView();
  }

  public constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>,
    private cfr: ComponentFactoryResolver
  ) {}
  public ngOnInit(): void {}

  private _updateView(): void {
    if (this._condition) {
      this.view.clear();
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
      const loadComponent: ComponentFactory<LoadingComponent> = this.cfr.resolveComponentFactory(LoadingComponent);
      this.view.createComponent(loadComponent);
    }
  }
}
