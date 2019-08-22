import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { DataSource } from '@angular/cdk/collections';
import { Product } from '../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {

  dataSource = new ProductDataSource(this.productService);
  displayedColumns = ['id', 'name', 'passportNumber'];

  constructor(private productService : ProductService) { }

  ngOnInit() {
  }

}

export class ProductDataSource extends DataSource<any> {
  constructor(private productService: ProductService) {
    super();
  }

  connect(): Observable<Product[]> {
    return this.productService.getProduct();
  }

  disconnect(){}
}


 // product
  // constructor(private http:HttpClient){}

  // showData() {
  //   this.http.get('http://localhost:7777/products/read').subscribe(res=>{
  //     this.product=res;
  //     console.log(this.product);  
  //   });
  // }