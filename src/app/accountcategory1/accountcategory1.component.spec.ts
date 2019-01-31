import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Accountcategory1Component } from './accountcategory1.component';

describe('Accountcategory1Component', () => {
  let component: Accountcategory1Component;
  let fixture: ComponentFixture<Accountcategory1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accountcategory1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accountcategory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
