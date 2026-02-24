import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriListComponent } from './components/categori-list/categori-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@Component({
  selector: 'app-root',
  imports: [ ProductListComponent, CategoriListComponent, CartComponent, ProductItemComponent, RouterOutlet, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
 
}
