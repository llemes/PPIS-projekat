import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeWrapperComponent } from './committee-wrapper.component';

describe('CommitteeWrapperComponent', () => {
  let component: CommitteeWrapperComponent;
  let fixture: ComponentFixture<CommitteeWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteeWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
