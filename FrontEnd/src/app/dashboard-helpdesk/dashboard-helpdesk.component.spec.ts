import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHelpdeskComponent } from './dashboard-helpdesk.component';

describe('DashboardHelpdeskComponent', () => {
  let component: DashboardHelpdeskComponent;
  let fixture: ComponentFixture<DashboardHelpdeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHelpdeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHelpdeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
