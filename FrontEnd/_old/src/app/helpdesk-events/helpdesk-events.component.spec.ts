import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskEventsComponent } from './helpdesk-events.component';

describe('HelpdeskEventsComponent', () => {
  let component: HelpdeskEventsComponent;
  let fixture: ComponentFixture<HelpdeskEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
