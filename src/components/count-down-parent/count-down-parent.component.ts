import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-count-down-parent',
  templateUrl: './count-down-parent.component.html',
  styleUrls: ['./count-down-parent.component.css']
})
export class CountDownParentComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;

  seconds() { return 0; }

  start() { this.timerComponent.start(); }

  stop() { this.timerComponent.stop(); }

  constructor() { }

  ngAfterViewChecked() {
  }

  ngAfterContentInit() {
    console.log('after Content Init');
  }

  ngAfterViewInit() {
    console.log('after view init');
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
  }

  ngOnInit() {
  }

}
