import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MedicalListComponent} from './component/medical-list/medical-list.component';
import {MedicalCreateComponent} from './component/medical-create/medical-create.component';
import {MedicalUpdateComponent} from './component/medical-update/medical-update.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'medical-list'},
  {path: 'medical-list', component: MedicalListComponent},
  {path: 'medical-create', component: MedicalCreateComponent},
  {path: 'medical-update/:id', component: MedicalUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
