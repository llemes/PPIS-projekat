import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpdeskChangesComponent } from './helpdesk-changes.component';

describe('HelpdeskChangesComponent', () => {
  let component: HelpdeskChangesComponent;
  let fixture: ComponentFixture<HelpdeskChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpdeskChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpdeskChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
