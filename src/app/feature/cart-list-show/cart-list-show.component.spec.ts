import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListShowComponent } from './cart-list-show.component';

describe('CartListShowComponent', () => {
  let component: CartListShowComponent;
  let fixture: ComponentFixture<CartListShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartListShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
