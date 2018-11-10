import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOtherAppLibComponent } from './my-other-app-lib.component';

describe('MyOtherAppLibComponent', () => {
  let component: MyOtherAppLibComponent;
  let fixture: ComponentFixture<MyOtherAppLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOtherAppLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOtherAppLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
