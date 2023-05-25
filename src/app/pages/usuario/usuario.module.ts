import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';

/* font awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalWarningModule } from '@app/components/modal/modal-warning/modal-warning.module';
import { ModalRegistroModule } from '@app/components/modal-registro/modal-registro.module';
//import { OrderModule } from 'ngx-order-pipe';
import { FormsModule } from '@angular/forms';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
//import { MomentModule } from 'ngx-moment';

import {LoaderModule} from "@app/components/loader/loader.module";
import {ToastModule} from "primeng/toast";

@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ModalWarningModule,
    ModalRegistroModule,
    //OrderModule,
    FormsModule,
    //Ng2SearchPipeModule,
    DropdownModule,
    InputSwitchModule,
    //MomentModule,
    LoaderModule,
    ToastModule
  ],
})
export class UsuarioModule {}
