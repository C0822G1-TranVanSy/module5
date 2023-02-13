import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './component/product/product.component';
import {ProductCreateComponent} from './component/product-create/product-create.component';
import {ProductUpdateComponent} from './component/product-update/product-update.component';


const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-update/:id', component: ProductUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
