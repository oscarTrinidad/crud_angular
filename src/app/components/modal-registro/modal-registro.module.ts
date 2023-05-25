import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRegistroComponent } from './modal-registro.component';
import {TabViewModule} from "primeng/tabview";
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import {CheckboxModule} from "primeng/checkbox";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [ModalRegistroComponent],
  imports: [
    CommonModule,
    TabViewModule,
    NgxPaginationModule,
    FormsModule,
    FontAwesomeModule,
    DropdownModule,
    InputSwitchModule,
    CheckboxModule,
    ToastModule
  ],
  exports: [ModalRegistroComponent]
})
export class ModalRegistroModule { }