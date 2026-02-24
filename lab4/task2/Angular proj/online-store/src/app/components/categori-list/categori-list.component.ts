import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-categori-list',
  imports: [ ProductListComponent],
  templateUrl: './categori-list.component.html',
  styleUrl: './categori-list.component.css',
})
export class CategoriListComponent {
   constructor(private productService: ProductService){}
  
    categories: Category[]=[];
    selectedCId:number | null = null;
    products:Product[]=[];
    cart:Product[]=[];
    
    ngOnInit(){
      this.categories = this.productService.getCategories();
    }
  
    selectCategory(CId:number)
    {
      this.selectedCId = CId;
      this.products = this.productService.getProductsByCategory(this.selectedCId);
    }

    deleteFromList(data:{pid:number, cid:number})
    {
      this.products = this.productService.removeFromList(data.pid, data.cid);

    }
    deleteFromCart(pid:number)
    {
      this.productService.removeFromCart(pid);
    }
}
