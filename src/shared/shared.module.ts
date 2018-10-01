import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/Unless.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HighlightDirective,
    UnlessDirective
  ],
  exports: [
    HighlightDirective,
    UnlessDirective
  ]
})
export class SharedModule { }
