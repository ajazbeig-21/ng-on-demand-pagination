import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPaginationComponent } from './child-pagination.component';

describe('ChildPaginationComponent', () => {
  let component: ChildPaginationComponent;
  let fixture: ComponentFixture<ChildPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
