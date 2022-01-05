import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductApiService} from '../../service/product.api.service';

@Component({
  selector: 'app-product-list-show',
  templateUrl: './product-list-show.component.html',
  styleUrls: ['./product-list-show.component.css']
})
export class ProductListShowComponent implements OnInit {
  productList: any;
  productId!: string;
  signUpForm!: FormGroup;
  returnUrl!: string;
  submitted = false;
  show!: boolean;
  showDoctorInfo!: boolean;
  serverError = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private productApiService: ProductApiService) {

    this.route.params.subscribe(params => {
      this.productId = this.route.snapshot.params['id'];
    });
  }

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      productName: ['', Validators.required],
      code: ['', Validators.required],
      description: ['', Validators.required],
      qty: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitInStock: ['', Validators.required],
      imageUrl:['', Validators.required]
    });
    this.getProductListBy(this.productId);
  }

  get f() {
    return this.signUpForm.controls;
  }

  getProductListBy(productId: string){

    this.productApiService.getProductListById(productId).subscribe(res => {

      this.productList = res;

    });
  }

  // @ts-ignore
  public onSubmit(){

    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }


    this.productApiService.updateProduct(
      this.productId ,
      this.f.productName.value,
      this.f.code.value,
      this.f.description.value,
      this.f.qty.value,
      this.f.unitPrice.value,
      this.f.unitInStock.value,
      this.f.imageUrl.value)
      .subscribe(
        data => {
          /*Toast.fire({type: 'success', title: 'Sign Up in successfully'});*/
          this.router.navigate(['product/list']);
        },
          (error: { status: number; }) => {
          if (error.status === 500) {
            this.serverError = 'Already taken phone number';
          }
        });
  }

  back(){
    this.router.navigate(['product/list']);
  }

}
