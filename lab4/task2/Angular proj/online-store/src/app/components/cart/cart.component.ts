import { Component} from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-cart',
  imports: [ProductItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart : Product[]=[];
  constructor(private productService:ProductService){}
  
  ngOnInit()
  {
    this.cart = this.productService.getCart();
  }

  remove(pId:number)
  {
    this.productService.removeFromCart(pId);
    this.cart=this.productService.getCart();
  }
}

