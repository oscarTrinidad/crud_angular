import { Component, OnInit } from '@angular/core';
import {
  faUserSlash,
  faTrash,
  faEdit,
  faSort,
} from '@fortawesome/free-solid-svg-icons';

import { LoaderService } from '@app/components/loader/loader.service';
import { ModalWarningService } from '@app/components/modal/modal-warning/modal-warning.service';
import { Usuario } from '@app/models/usuario'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  // Iconos
  faUserSlash = faUserSlash;
  faTrash = faTrash;
  faEdit = faEdit;
  
  // Paginaión de tabla
  paginacion: number;  
  dataUsuarioBoolean: boolean;
  paginacionSelect = [{ item: 5 }, { item: 10 }, { item: 15 }, { item: 20 }];
  paginacionlist: number;

  //Data
  dataUsuario: Usuario[];
  
  constructor(
    private _loader: LoaderService,
    private _modalWaring: ModalWarningService,
  ) {
    this.paginacion = 1;
    this.paginacionlist = 5;
    this.dataUsuarioBoolean = false;
    this.dataUsuario = [];
  }
  ngOnInit(): void {
    console.log('PREVISTA')
    var dataUsuario = [
      {
        id_usuario: 1,
        apellido_paterno: 'Trinidad',
        apellido_materno: 'Quiñonez',
        nombre_usuario: 'Oscar',
        dni_usuario: '71333584',
        email: 'racso5741175@gmail.com',
        fecha_registro: '2023-05-25',
        tipo_usuario: 'admin',
        estado: true
      }
    ]

    this.dataUsuario = dataUsuario;
    this.dataUsuarioBoolean = true;
  }

  editarUsuario(){
    this._modalWaring.mostrarModal(
      `¿Estas seguro de querer eliminar?`,
      'El usuario no tendra acceso al sistema, en caso este iniciado no podra realizar ninguna acción',
      'eliminarUsuario'
    );
  }

  confirmarcionModalWarning(successEmiter:any) {
    this._loader.activarLoading();
    switch (successEmiter) {
      case 'eliminarUsuario':
        console.log('PRUEBA WARNING');
        this._loader.ocultarLoading();
      break;
    }
  }
}
