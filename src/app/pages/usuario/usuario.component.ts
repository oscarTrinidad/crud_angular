import { Component, OnInit } from '@angular/core';
import {
  faUserSlash,
  faTrash,
  faEdit,
  faSort,
} from '@fortawesome/free-solid-svg-icons';

import { LoaderService } from '@app/components/loader/loader.service';
import { ModalWarningService } from '@app/components/modal/modal-warning/modal-warning.service';
import { ModalRegistroService } from '@app/components/modal-registro/modal-registro.service';
import { Usuario } from '@app/models/usuario'
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  providers: [MessageService]
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
  filtroSelect = [{ value: 1, item: 'TODOS' }, {  value: 2, item: 'ACTIVOS'  }, { value: 3, item: 'INACTIVOS' }];
  filtrolist: any;
  //Data
  dataUsuario: Usuario[];
  idClaveEliminar: string;
  usuarioSeleccionado: string;
  
  constructor(
    private _loader: LoaderService,
    private _modalWaring: ModalWarningService,
    private modalRegistro: ModalRegistroService,
    private messageService: MessageService,
  ) {
    this.paginacion = 1;
    this.paginacionlist = 5;
    this.dataUsuarioBoolean = false;
    this.dataUsuario = [];
    this.idClaveEliminar = '';
    this.usuarioSeleccionado = '';
    this.filtrolist = 1;
  }
  ngOnInit(): void {
    console.log('PREVISTA')
    /*var dataUsuario = [
      {
        id_usuario: '71333584',
        dni_usuario: '71333584',
        nombre_usuario: 'Oscar',
        contrasenia: 'oscar',
        estado: true
      }
    ]

    this.setUsuario('Usuarios',dataUsuario)*/

    //localStorage.clear();

    this.dataUsuario = this.getUsuario('Usuarios');

    if(this.dataUsuario.length > 0){
      this.dataUsuarioBoolean = true;
    } else {
      this.dataUsuarioBoolean = false;
    }

    //this.dataUsuario = dataUsuario;
  }

  //Funciones CRUD
  registrarUsuario(){
    this.usuarioSeleccionado = '';
    setTimeout(() => {
      this.modalRegistro.mostrarModal('eventoCrear');
    }, 100); 
  }
  editarUsuario(id: any){
    this.usuarioSeleccionado = id;
    setTimeout(() => {
      this.modalRegistro.mostrarModal('eventoEditar');
    }, 100);     
  }

  eliminarUsuario(id: any,nombre: any){
    this.idClaveEliminar = id;
    console.log('id a eliminar',this.idClaveEliminar)
    this._modalWaring.mostrarModal(
      `¿Estas seguro de querer eliminar a ${nombre}?`,
      'El usuario no tendra acceso al sistema, en caso este iniciado no podra realizar ninguna acción',
      'eliminarUsuario'
    );
  }

  // Funciones localStorage

  setUsuario(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getUsuario(key: string): any {
    const lista = localStorage.getItem(key);

    return lista ? JSON.parse(lista) : [];
  }

  //Filtro estados
  selectFiltro() {
    console.log(this.filtrolist);
    var dataUsuario = [];
    var list:any[] = this.getUsuario('Usuarios');
    this.paginacion = 1;

    if(this.filtrolist == 2){ //ACTIVOS
      dataUsuario =list.filter((element)=>{
        return element.estado == true
      })
      this.dataUsuario = dataUsuario;
    } else if(this.filtrolist == 3){ //INACTIVOS
      dataUsuario =list.filter((element)=>{
        return element.estado == false
      })
      this.dataUsuario = dataUsuario;
    } else {
      this.dataUsuario = list;
    }
  }

  // Funcion Event
  success(successEmiter:any) {
    this._loader.activarLoading();
    switch (successEmiter) {
      case 'eliminarUsuario':
        var dataUsuario = [];
        var list:any[] = this.getUsuario('Usuarios');
        dataUsuario =list.filter((element)=>{
          return element.id_usuario != this.idClaveEliminar
        })

        this.setUsuario('Usuarios',dataUsuario);
        this.dataUsuario = dataUsuario;

        setTimeout(() => {
          this._loader.ocultarLoading();
          this.paginacion = 1;
          this.filtrolist = 1;
          this.messageService.add({
            key:'alerta', severity:'info', 
            summary:'ELIMINACIÓN EXITOSA', detail:'Se eliminó al usuario correctamente.', 
            life: 3000
          });
          if(this.dataUsuario.length > 0){
            this.dataUsuarioBoolean = true;
          } else {
            this.dataUsuarioBoolean = false;
          }
        }, 1000);
      break;
      case 'eventoCrear':
        this._loader.ocultarLoading();
        this.messageService.add({
          key:'alerta', severity:'success', 
          summary:'REGISTRO EXITOSO', detail:'Usuario registrado correctamente.', 
          life: 3000
        });

        this.dataUsuario = this.getUsuario('Usuarios');
        this.filtrolist = 1;

        if(this.dataUsuario.length > 0){
          this.dataUsuarioBoolean = true;
        } else {
          this.dataUsuarioBoolean = false;
        }
      break;
      case 'eventoEditar':
        this._loader.ocultarLoading();
        this.messageService.add({
          key:'alerta', severity:'success', 
          summary:'ACTUALIZACIÓN EXITOSA', detail:'Usuario editado correctamente.', 
          life: 3000
        });
        this.dataUsuario = this.getUsuario('Usuarios');
        this.filtrolist = 1;

        if(this.dataUsuario.length > 0){
          this.dataUsuarioBoolean = true;
        } else {
          this.dataUsuarioBoolean = false;
        }
      break;
    }
  }
}
