import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessdetailsComponent } from './accessdetails.component';

describe('AccessdetailsComponent', () => {
  let component: AccessdetailsComponent;
  let fixture: ComponentFixture<AccessdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
