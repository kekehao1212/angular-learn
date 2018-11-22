// import { Directive, Optional, ElementRef, OnInit, OnDestroy} from '@angular/core';
// import { SearchableDirective } from './searchable.directive';
// import { SearchableContainerComponent } from '../searchable-container/searchable-container.component';
// import { DomSanitizer } from '@angular/platform-browser';

// @Directive({
//   selector: '[appSearchableHighlight]'
// })
// export class SearchableHighlightDirective implements OnInit, OnDestroy {

//   constructor(
//     @Optional() private container: SearchableContainerComponent,
//     @Optional() private searchable: SearchableDirective,
//     private santizer: DomSanitizer,
//     private el: ElementRef
//   ) {
//     if (!searchable) {
//       throw new Error(`Missing [searchable] Directive`);
//     }
//    }
//    ngOnInt () {
//     this.container.register(this, { highlight: true });
//    }

//    ngOnDestroy() {
//      this.container.unregister(this. { highlight: true });
//    }
// }
