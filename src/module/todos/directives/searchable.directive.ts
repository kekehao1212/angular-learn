import { Directive, Input, Optional, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { SearchableContainerComponent } from '../searchable-container/searchable-container.component';

@Directive({
  selector: '[appSearchable]',
})
export class SearchableDirective implements OnInit, OnDestroy {
  token = '';

  @Input()
  set appSearchable(value: string) {
    this.token = value;
  }

  constructor(@Optional() private container: SearchableContainerComponent, private el: ElementRef) {
    if (!container) {
      throw new Error('Missing <searchable-container> warpper component');
    }
  }
  ngOnInit() {
    this.container.register(this);
  }
  hide() {
    this.el.nativeElement.classList.add('hide');
  }
  show() {
    this.el.nativeElement.classList.remove('hide');
  }
  ngOnDestroy() {
    this.container.unregister(this);
  }
}
