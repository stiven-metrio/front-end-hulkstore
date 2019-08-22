import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ProducttableComponent } from './components/producttable/producttable.component';

import { MatTableModule } from '@angular/material';

import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProducttableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
