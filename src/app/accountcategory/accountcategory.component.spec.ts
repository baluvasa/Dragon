import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcategoryComponent } from './accountcategory.component';

describe('AccountcategoryComponent', () => {
  let component: AccountcategoryComponent;
  let fixture: ComponentFixture<AccountcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
