/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountDownParentComponent } from './count-down-parent.component';

describe('CountDownParentComponent', () => {
  let component: CountDownParentComponent;
  let fixture: ComponentFixture<CountDownParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountDownParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
