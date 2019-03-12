import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoappComponent } from './poapp.component';

describe('PoappComponent', () => {
  let component: PoappComponent;
  let fixture: ComponentFixture<PoappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
