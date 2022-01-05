import { Component, OnInit } from '@angular/core';
import {CategoryModel} from "../../model/category.model";
import {CategoryApiService} from "../../service/category.api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {



  categoryList: CategoryModel[] = new Array<CategoryModel>();

  constructor(
    private categoryService: CategoryApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.getAllCategorys()
  }

  getAllCategorys() {
    this.categoryService.getAllCategorys().subscribe(res => {
      this.categoryList = res;
    })
  }

  backToHome() {
    this.router.navigate([''])
  }

  onCategoryShowById(id: any) {
    this.router.navigate(['category/list/show-by/' + id]);
  }

  onCategoryEditById(id: string) {
    this.router.navigate(['update-category/' + id]);

  }

  onCategoryDeleteById(id: any) {

    this.categoryService.deleteCategory(id).subscribe(res => {
      this.router.navigate(['/']);
    });
  }
}
