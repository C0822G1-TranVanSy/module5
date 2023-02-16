import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/layout/home/home.component';
import {FacilityListComponent} from './component/facility/facility-list/facility-list.component';
import {FacilityEditComponent} from './component/facility/facility-edit/facility-edit.component';
import {FacilityCreateComponent} from './component/facility/facility-create/facility-create.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {CustomerUpdateComponent} from './component/customer/customer-update/customer-update.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {ContractListComponent} from './component/contract/contract-list/contract-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-edit', component: FacilityEditComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-update/:id', component: CustomerUpdateComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'contract-list', component: ContractListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
