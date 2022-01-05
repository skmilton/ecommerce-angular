import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListShowComponent } from './order-list-show.component';

describe('OrderListShowComponent', () => {
  let component: OrderListShowComponent;
  let fixture: ComponentFixture<OrderListShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderListShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
