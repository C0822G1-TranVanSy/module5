import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { HomeComponent } from './component/layout/home/home.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';
import { FacilityEditComponent } from './component/facility/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './component/facility/facility-create/facility-create.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './component/customer/customer-update/customer-update.component';
import { ContractListComponent } from './component/contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    ContractListComponent,
    ContractCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
