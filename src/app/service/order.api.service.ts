import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({providedIn: 'root'})
export class OrderApiService {

  constructor(private http: HttpClient) {

  }

  private loginEndPointLocalServer: string = environment.orderApiHost + '/create';

  private getAllOrderApi: string = environment.orderApiHost + '/show/all/list';
  private getAllOrderByIdApi: string = environment.orderApiHost + '/show/list/by/';
  private updateAllOrderByIdApi: string = environment.orderApiHost + '/update/order/by/';
  private deleteAllOrderByIdApi: string = environment.orderApiHost + '/delete/orderList/by/';

  createOrders(model: any){
    console.log(model)
    const url: string = environment.orderApiHost + '/create';
    return this.http.post(url, model).pipe(map((res: any) => {
      return res;
    }));
  }

  getAllOrders(){
    const url: string = environment.orderApiHost + '/get-all-order';
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }

  getOrderById(id: number){
    const url: string = environment.orderApiHost + '/get-order-by-id/' + id;
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }));
  }
  public getOrderList(): Observable<any> {

    return this.http.get(this.getAllOrderApi, httpOptions)
      .pipe(map(res => res));

  }

  public getOrderListById(orderId: string): Observable<any> {

    return this.http.get(this.getAllOrderByIdApi + orderId, httpOptions)
      .pipe(map(res => res));

  }

    updateOrder(orderId: string, totalPrice: string, date: string, deliveryDate: string, orderProduct:string[], ): Observable<any> {

    return this.http.put(this.updateAllOrderByIdApi + orderId, {

      totalPrice: totalPrice,
      date: date,
      deliveryDate: deliveryDate,
      orderProduct: orderProduct,

      },
    );
  }


  public deleteOrder(orderId: string): Observable<any> {

    return this.http.delete(this.deleteAllOrderByIdApi + orderId, httpOptions)
      .pipe(map(res => res));

  }
}
