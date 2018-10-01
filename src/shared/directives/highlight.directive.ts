import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    this.highlight('cyan');
  }
  @Input() appHighlight: string;
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.appHighlight);
    this.highlight(this.appHighlight);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
