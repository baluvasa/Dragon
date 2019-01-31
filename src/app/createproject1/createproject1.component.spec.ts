import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Createproject1Component } from './createproject1.component';

describe('Createproject1Component', () => {
  let component: Createproject1Component;
  let fixture: ComponentFixture<Createproject1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Createproject1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Createproject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
