import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdecComponent } from './prodec.component';

describe('ProdecComponent', () => {
  let component: ProdecComponent;
  let fixture: ComponentFixture<ProdecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
