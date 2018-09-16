import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  isPopupshow: Boolean = false;
  popup(): void {
    if (this.isPopupshow) {
      this.router.navigate([{outlets: { popup: null }}]);
      this.isPopupshow = false;
    } else {
      this.router.navigate(['heroes', {outlets: { popup: ['popup']}}]);
      this.isPopupshow = true;
    }
  }
  sayHello(): void {
    console.log('hello');
  }
}
