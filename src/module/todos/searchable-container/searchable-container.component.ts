import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { SearchableDirective } from '../directives/searchable.directive';
import { SearchableHighlightDirective } from '../directives/searchable-highlight.directive';

@Component({
  selector: 'app-searchable-container',
  template: `
    <ng-content></ng-content>
  `,
  exportAs: 'searchableContainer',
  styleUrls: ['./searchable-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchableContainerComponent implements OnInit, OnDestroy {
  private searchables: SearchableDirective[] = [];
  private searchablesHighlight: SearchableHighlightDirective[] = [];
  private _term = '';

  @Input('searchTerm')
  set term(searchTerm: string) {
    this._term = searchTerm || '';
    this.search(this._term);
  }
  get term() {
    return this._term;
  }

  register(searchable: SearchableDirective | SearchableHighlightDirective, { highlight }  = { highlight }) {
    if (highlight) {
      this.searchablesHighlight.push(searchable as SearchableHighlightDirective);
    } else {
      this.searchables.push(searchable as SearchableDirective);
    }
  }

  unregister (searchable: SearchableDirective | SearchableHighlightDirective, { highlight } = { highlight }) {
    if (highlight) {
      this.searchablesHighlight = this.searchablesHighlight.filter(current => current !== searchable);
    } else {
      this.searchables = this.searchables.filter(current => current !== searchable);
    }
  }

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.searchables = [];
    this.searchablesHighlight = [];
  }

  private search(searchTerm: string) {
    this.handleSearchables(searchTerm);
    this.handleSearchablesHighlight(searchTerm);
  }

  private handleSearchables(searchTerm: string) {
    for (const searchable of this.searchables) {
      if (!searchTerm) {
        searchable.show();
      } else {
        if (this.match(searchable)) {
          searchable.show();
        } else {
          searchable.hide();
        }
      }
    }
  }

  private handleSearchablesHighlight(searchTerm: string) {
    for (const searchableHighlight of this.searchablesHighlight) {
      searchableHighlight.highlight(searchableHighlight.token, searchTerm);
    }
  }

  private match(searchable: SearchableDirective) {
    return searchable.token.toLowerCase().indexOf(this._term.toLowerCase()) > -1;
  }
}
