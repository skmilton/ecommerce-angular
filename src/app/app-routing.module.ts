import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeinfoComponent} from './employeeinfo/employeeinfo.component';
import {SiteHomeComponent} from './site-home/site-home.component';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {EmployeeListShowComponent} from './employee-list-show/employee-list-show.component';
import {FirstComponent} from './nghh/first/first.component';
import {ProductComponent} from "./feature/product/product.component";
import {ProductListComponent} from "./feature/product-list/product-list.component";
import {ProductListShowComponent} from "./feature/product-list-show/product-list-show.component";
import {CategoryComponent} from "./feature/category/category.component";
import {CategoryListComponent} from "./feature/category-list/category-list.component";
import {OrderComponent} from "./feature/order/order.component";
import {OrderListComponent} from "./feature/order-list/order-list.component";

const routes: Routes = [

  {
    path: '',
    component: SiteHomeComponent,
    children: [
      {path: '', component: SiteHomeComponent, pathMatch: 'full'}

    ]
  },

  {
    path: 'startapp',
    component: EmployeeinfoComponent,
    children: [
      {path: 'startapp', component: EmployeeinfoComponent, canActivate: [true]},
    ],
  },

  {
    path: 'employee/list',
    component: EmployeListComponent,
    children: [
      {path: 'employee/list', component: EmployeListComponent, canActivate: [true]},
    ],
  },

  {
    path: 'employee/list',
    component: EmployeListComponent,
    children: [
      {path: 'employee/list', component: EmployeListComponent, canActivate: [true]},
    ],
  },

  {
    path: 'employee/list/show-by/:id',
    component: EmployeeListShowComponent,
    children: [
      {path: 'employee/list/show-by/:id', component: EmployeeListShowComponent, canActivate: [true]},
    ],
  },

  {
    path: 'demo',
    component: FirstComponent,
    children: [
      {path: 'demo', component: FirstComponent, canActivate: [true]},
    ],
  },
  {
    path: 'category',
    component: CategoryComponent,
    children: [
      {path: 'category', component: CategoryComponent, canActivate: [true]},
    ],
  },
  {
    path: 'update-category/:id',
    component: CategoryComponent
  },
  {
    path: 'category-list',
    component: CategoryListComponent,
    children: [
      {path: 'category-list', component:CategoryListComponent, canActivate: [true]},
    ],
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {path: 'product', component: ProductComponent, canActivate: [true]},
    ],
  },
  {
    path: 'update-product/:id',
    component: ProductComponent
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    children: [
      {path: 'product-list', component: ProductListComponent, canActivate: [true]},
    ],
  },
  {
    path: 'order',
    component: OrderComponent,
    children: [
      {path: 'order', component: OrderComponent, canActivate: [true]},
    ],
  },
  {
    path: 'update-order/:id',
    component: OrderComponent
  },
  {
    path: 'order-list',
    component: OrderListComponent,
    children: [
      {path: 'order-list', component: OrderListComponent, canActivate: [true]},
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
