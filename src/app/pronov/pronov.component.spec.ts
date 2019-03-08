import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronovComponent } from './pronov.component';

describe('PronovComponent', () => {
  let component: PronovComponent;
  let fixture: ComponentFixture<PronovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
