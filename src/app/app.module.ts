import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
import { SiteHomeComponent } from './site-home/site-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeeListShowComponent } from './employee-list-show/employee-list-show.component';
import { FirstComponent } from './nghh/first/first.component';
import { ProductComponent } from './feature/product/product.component';
import { ProductListComponent } from './feature/product-list/product-list.component';
import { ProductListShowComponent } from './feature/product-list-show/product-list-show.component';
import { CategoryComponent } from './feature/category/category.component';
import { CategoryListComponent } from './feature/category-list/category-list.component';
import { CategoryListShowComponent } from './feature/category-list-show/category-list-show.component';
import { OrderComponent } from './feature/order/order.component';
import { OrderListComponent } from './feature/order-list/order-list.component';
import { OrderListShowComponent } from './feature/order-list-show/order-list-show.component';
import { OrderProductListShowComponent } from './feature/order-product-list-show/order-product-list-show.component';
import { OrderProductListComponent } from './feature/order-product-list/order-product-list.component';
import { OrderProductComponent } from './feature/order-product/order-product.component';
import { CartComponent } from './feature/cart/cart.component';
import { CartListComponent } from './feature/cart-list/cart-list.component';
import { CartListShowComponent } from './feature/cart-list-show/cart-list-show.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeinfoComponent,
    SiteHomeComponent,
    EmployeListComponent,
    EmployeeListShowComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    ProductListShowComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoryListShowComponent,
    OrderComponent,
    OrderListComponent,
    OrderListShowComponent,
    OrderProductListShowComponent,
    OrderProductListComponent,
    OrderProductComponent,
    CartComponent,
    CartListComponent,
    CartListShowComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
