import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectinfoMonthlyComponent } from './projectinfo-monthly.component';

describe('ProjectinfoMonthlyComponent', () => {
  let component: ProjectinfoMonthlyComponent;
  let fixture: ComponentFixture<ProjectinfoMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectinfoMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectinfoMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
