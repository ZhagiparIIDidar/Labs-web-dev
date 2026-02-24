import { Routes } from '@angular/router';
import { CategoriListComponent } from './components/categori-list/categori-list.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {path:'', component:CategoriListComponent},
    {path:'categories', redirectTo:'', pathMatch:'full'},
    {path:'cart', component:CartComponent},
];   
