import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductListShowComponent } from './order-product-list-show.component';

describe('OrderProductListShowComponent', () => {
  let component: OrderProductListShowComponent;
  let fixture: ComponentFixture<OrderProductListShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderProductListShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
