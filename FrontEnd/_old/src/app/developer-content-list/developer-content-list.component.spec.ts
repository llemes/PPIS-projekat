import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperContentListComponent } from './developer-content-list.component';

describe('DeveloperContentListComponent', () => {
  let component: DeveloperContentListComponent;
  let fixture: ComponentFixture<DeveloperContentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeveloperContentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
