import { Component, OnInit } from '@angular/core';
import {OrderModel} from "../../model/order.model";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderApiService} from "../../service/order.api.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  model: OrderModel = new OrderModel();
  id = this.route.snapshot.params['id'];

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private orderService: OrderApiService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.getOrderById();
  }

  createOrder() {
    this.orderService.createOrders(this.model).subscribe(res => {
      console.log(res);
      this.router.navigate(['/order-list'])
    })
  }

  getOrderById() {
    this.orderService.getOrderById(this.id).subscribe(res => {
      console.log(res);
      this.model = res;
    })
  }


  backToHome() {
    this.router.navigate([''])
  }
}
