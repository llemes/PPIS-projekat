import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperWrapperComponent } from './developer-wrapper.component';

describe('DeveloperWrapperComponent', () => {
  let component: DeveloperWrapperComponent;
  let fixture: ComponentFixture<DeveloperWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
