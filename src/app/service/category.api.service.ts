import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({providedIn: 'root'})
export class CategoryApiService {

  constructor(private http: HttpClient) {

  }

  private loginEndPointLocalServer: string = environment.categoryApiHost + '/create';

  private getAllCategoryApi: string = environment.categoryApiHost + '/show/all/list';
  private getAllCategoryByIdApi: string = environment.categoryApiHost + '/show/list/by/';
  private updateAllCategoryByIdApi: string = environment.categoryApiHost + '/update/category/by/';
  private deleteAllCategoryByIdApi: string = environment.categoryApiHost + '/delete/categoryList/by/';

  createCategorys(model: any){
    console.log(model)
    const url: string = environment.categoryApiHost + '/create';
    return this.http.post(url, model).pipe(map((res: any) => {
      return res;
    }));
  }

  getAllCategorys(){
    const url: string = environment.categoryApiHost + '/get-all-category';
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }

  getCategoryById(id: number){
    const url: string = environment.categoryApiHost + '/get-category-by-id/' + id;
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }
 public getCategoryList(): Observable<any> {

   return this.http.get(this.getAllCategoryApi, httpOptions)
     .pipe(map(res => res));

 }

  public getCategoryListById(categoryId: string): Observable<any> {

    return this.http.get(this.getAllCategoryByIdApi + categoryId, httpOptions)
      .pipe(map(res => res));

  }

    updateCategory(categoryId: string, categoryName: string): Observable<any> {

    return this.http.put(this.updateAllCategoryByIdApi + categoryId, {

        categoryName: categoryName

      },
    );
  }


  public deleteCategory(categoryId: string): Observable<any> {

    return this.http.delete(this.deleteAllCategoryByIdApi + categoryId, httpOptions)
      .pipe(map(res => res));

  }
}
