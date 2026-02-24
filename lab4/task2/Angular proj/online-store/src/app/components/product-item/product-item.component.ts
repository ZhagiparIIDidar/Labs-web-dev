import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})

export class ProductItemComponent {
  @Input() product!: Product;
  constructor(private productService:ProductService){}

  addToCart()
  {
    this.productService.addToCart(this.product)
  }
  
  @Output() deleteCart = new EventEmitter<number>();
  removeFromCart()
  {
    this.deleteCart.emit(this.product.id)
  }

  @Output() deleteList = new EventEmitter<number>();
  removeFromList()
  {
    this.deleteList.emit(this.product.id)
  }

  addLikes()
  {
    this.product.likes++;
  }
  // product-item.component.ts
shareToTelegram() {
  const url = encodeURIComponent(this.product.kaspiLink);
  window.open(`https://t.me/share/url?url=${url}`, '_blank');
}

shareToWhatsApp() {
  window.open(`https://wa.me/?`, '_blank');
}
}
