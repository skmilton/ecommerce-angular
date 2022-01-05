import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryApiService} from "../../service/category.api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  signUpForm!: FormGroup;
  returnUrl!: string;
  submitted = false;
  show!: boolean;
  showDoctorInfo!: boolean;
  serverError = '';


  constructor(private formBuilder: FormBuilder,
              private categoryApiService: CategoryApiService,
              private router: Router) {
  }


  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      categoryName: ['', Validators.required]

    });

  }
  backToHome() {
    this.router.navigate([''])
  }
  get f() {
    return this.signUpForm.controls;
  }

  public onSubmit() {

    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }

    this.categoryApiService.createCategorys(
      this.f.categoryName.value
    )

      .subscribe(
        data => {
          /*Toast.fire({type: 'success', title: 'Sign Up in successfully'});*/
          this.router.navigate(['category/list']);
        },
        error => {
          if (error.status === 500) {
            this.serverError = 'Already taken phone number';
          }
        });
  }}

