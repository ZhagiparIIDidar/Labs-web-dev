import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  imports: [ ProductItemComponent],
})
export class ProductListComponent {
  @Input() selectedcid!:number;  
  @Input() products:Product[]=[];

  @Output() deleteList = new EventEmitter<{pid:number, cid:number}>();

  onDeleteProduct(pId:number){
    this.deleteList.emit({pid:pId, cid:this.selectedcid});
  }

}
