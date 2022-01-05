import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListShowComponent } from './product-list-show.component';

describe('ProductListShowComponent', () => {
  let component: ProductListShowComponent;
  let fixture: ComponentFixture<ProductListShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
