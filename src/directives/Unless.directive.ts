import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
     } else if (condition && this.hasView) {
       this.viewContainerRef.clear();
       this.hasView = false;
     }
  }
  constructor(
    // acqurie <ng-template>
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    console.log(this.templateRef);
   }

}
