import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SearchableDirective } from '../directives/searchable.directive';

@Component({
  selector: 'app-searchable-container',
  template: `
    <ng-content></ng-content>
  `,
  exportAs: 'searchableContainer',
  styleUrls: ['./searchable-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchableContainerComponent implements OnInit {
  private searchables: SearchableDirective[] = [];
  private _term = '';

  @Input('searchTerm')
  set term(searchTerm: string) {
    this._term = searchTerm || '';
    this.search(this._term);
  }
  get term() {
    return this._term;
  }

  register(searchable: SearchableDirective) {
    this.searchables.push(searchable);
  }

  unregister (searchable: SearchableDirective) {
    this.searchables = this.searchables.filter(current => current !== searchable);
  }

  constructor() { }

  ngOnInit() {
  }

  private search(searchTerm: string) {
    console.log(searchTerm, 'aaaaaaaaaaaaaaaaaa');
    this.handleSearchables(searchTerm);
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

  private match(searchable: SearchableDirective) {
    console.log(searchable.token, this._term);
    return searchable.token.toLowerCase().indexOf(this._term.toLowerCase()) > -1;
  }
}
