import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MedicalCreateComponent } from './component/medical-create/medical-create.component';
import { MedicalUpdateComponent } from './component/medical-update/medical-update.component';
import { MedicalListComponent } from './component/medical-list/medical-list.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { PageMedicalDtoComponent } from './model/page-medical-dto/page-medical-dto.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicalCreateComponent,
    MedicalUpdateComponent,
    MedicalListComponent,
    HeaderComponent,
    FooterComponent,
    PageMedicalDtoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
