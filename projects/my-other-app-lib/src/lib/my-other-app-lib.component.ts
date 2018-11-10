import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-other-app-lib',
  template: `
    <p>
      my-other-app-lib works!
    </p>
  `,
  styles: []
})
export class MyOtherAppLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
