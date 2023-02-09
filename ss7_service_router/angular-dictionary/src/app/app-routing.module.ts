import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionaryPageComponent} from './component/dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './component/dictionary-detail/dictionary-detail.component';


const routes: Routes = [
  {path: '', component: DictionaryPageComponent},
  {path: 'view/:id', component: DictionaryDetailComponent},
  {path: 'search/:word', component: DictionaryDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
