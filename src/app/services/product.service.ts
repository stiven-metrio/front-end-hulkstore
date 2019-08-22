import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private serviceUrl = 'https://jsonplaceholder.typicode.com/posts';
  private serviceUrl = 'http://localhost:7777/products/read/10001';

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/html, application/xhtml+xml, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    responseType: 'text'
  };

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product []> {
    return this.http.get<Product []>(this.serviceUrl);
  }

}


 // product
  // constructor(private http:HttpClient){}

  // showData() {
  //   this.http.get('http://localhost:7777/products/read').subscribe(res=>{
  //     this.product=res;
  //     console.log(this.product);  
  //   });
  // }