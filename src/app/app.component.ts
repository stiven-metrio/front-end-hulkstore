import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-hulkstore';
 // product
  // constructor(private http:HttpClient){}

  // showData() {
  //   this.http.get('http://localhost:7777/products/read').subscribe(res=>{
  //     this.product=res;
  //     console.log(this.product);  
  //   });
  // }
}

