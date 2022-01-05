import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListShowComponent } from './category-list-show.component';

describe('CategoryListShowComponent', () => {
  let component: CategoryListShowComponent;
  let fixture: ComponentFixture<CategoryListShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
