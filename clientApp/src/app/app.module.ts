import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ItemPaginationComponent } from './item-pagination/item-pagination.component';
import { FooterComponent } from './footer/footer.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { BasketComponent } from './basket/basket.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';
import { PreventDefaultDirective } from './directives/preventDefault.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    PaginationComponent,
    ItemPaginationComponent,
    FooterComponent,
    ProductInfoComponent,
    BasketComponent,
    PreventDefaultDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    JwPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
