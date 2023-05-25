import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';

/* font awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/* prime ng */
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { CheckboxModule } from 'primeng/checkbox';
import { AccordionModule } from 'primeng/accordion';
import { PasswordModule } from 'primeng/password';

import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { ModalWarningModule } from './components/modal/modal-warning/modal-warning.module';
import { LoaderModule } from './components/loader/loader.module';
import {ToastModule} from "primeng/toast";

registerLocaleData(localEs, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,

    DropdownModule,
    InputTextModule,
    FontAwesomeModule,
    PanelMenuModule,
    TieredMenuModule,
    ButtonModule,
    MenuModule,
    CheckboxModule,
    AccordionModule,
    PasswordModule,
    
    HttpClientModule,

    ModalWarningModule,
    LoaderModule,
    ToastModule
  ],

  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
