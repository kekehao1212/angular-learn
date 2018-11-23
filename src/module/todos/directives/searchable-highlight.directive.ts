import { Directive, Optional, ElementRef, OnInit, OnDestroy, SecurityContext } from '@angular/core';
import { SearchableDirective } from './searchable.directive';
import { SearchableContainerComponent } from '../searchable-container/searchable-container.component';
import { DomSanitizer } from '@angular/platform-browser';

const pattern = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

@Directive({
  selector: '[appSearchableHighlight]',
})
export class SearchableHighlightDirective implements OnInit, OnDestroy {
  constructor(
    @Optional() private container: SearchableContainerComponent,
    @Optional() private searchable: SearchableDirective,
    private santizer: DomSanitizer,
    private el: ElementRef
  ) {
    if (!searchable) {
      throw new Error(`Missing [searchable] Directive`);
    }
  }

  ngOnInit() {
    this.container.register(this, { highlight: true });
  }

  ngOnDestroy() {
    this.container.unregister(this, { highlight: true });
  }

  get token() {
    return this.searchable.token;
  }

  highlight(token: string, searchTerm: string) {
    this.el.nativeElement.innerHTML =
      this.santizer.sanitize(SecurityContext.HTML, this.resolve(token, searchTerm));
  }

  resolve(token: string, searchTerm: string) {
    let cleanSearch = searchTerm.replace(pattern, '\\$&');
    cleanSearch = cleanSearch
      .split(' ')
      .filter((t) => t.length)
      .join('|');

    const regex = new RegExp(cleanSearch, 'gi');

    return cleanSearch ? token.replace(regex, (match) => `<span class="highlight">${match}</span>`) : token;
  }
}
