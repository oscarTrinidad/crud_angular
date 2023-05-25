import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SubscriptionLike } from "rxjs";
import { ValidarHelper } from "@app/helper/validar/validar";
import { MessageService } from 'primeng/api';
import { LoaderService } from "@app/components/loader/loader.service";
import { ModalRegistroService } from './modal-registro.service';

@Component({
    selector: 'app-modal-registro',
    templateUrl: './modal-registro.component.html',
    styleUrls: ['./modal-registro.component.scss'],
    providers: [MessageService]
})
export class ModalRegistroComponent implements OnInit {

    modal_registro: string = '';

    dataRegistro: any;
    errorRegistro: any;

    dataTipo: any;
    titulo: string = '';

    modal?: SubscriptionLike;

    @Input() id_usuario: any;


    @Output() hidden = new EventEmitter();
    @Output() success = new EventEmitter<any>();

    constructor(
        private modalRegistro: ModalRegistroService,
        public validar: ValidarHelper,
        private messageService: MessageService,
        private loader: LoaderService,
    ) {

        this.dataRegistro = {
            id_usuario: '',
            dni_usuario: '',
            nombre_usuario: '',
            contrasenia: '',
            estado: false
        }

        this.errorRegistro = {
            dni_usuario: '',
            nombre_usuario: '',
            contrasenia: ''
        }

        this.dataTipo = {};

    }

    ngOnInit(): void {
        this.modal_registro = 'ocultar';

        this.modal = this.modalRegistro.observarModal$().subscribe((response: string) => {
            this.modal_registro = response;
            if(this.id_usuario != ''){
                let lista = localStorage.getItem('Usuarios'); //Obtener listado de Usuarios
                let validacion:any[] = lista? JSON.parse(lista) : [] //Validar si hay o no datos y devuelve array
                this.titulo = 'EDITAR';

                validacion.map((element)=>{
                    if(element.dni_usuario == this.id_usuario){
                        this.dataRegistro.dni_usuario = element.id_usuario;
                        this.dataRegistro.dni_usuario = element.dni_usuario;
                        this.dataRegistro.nombre_usuario = element.nombre_usuario;
                        this.dataRegistro.contrasenia = element.contrasenia;
                        this.dataRegistro.estado = element.estado;
                    }
                })

            } else {
                this.titulo = 'CREAR';
            }
        });
    }

    limpiarFormularioRegistro() {
        this.dataRegistro = {
            id_usuario: '',
            dni_usuario: '',
            nombre_usuario: '',
            contrasenia: '',
            estado: false
        }

        this.errorRegistro = {
            dni_usuario: '',
            nombre_usuario: '',
            contrasenia: ''
        }
    }

    limpiarErroresRegistro() {
        this.errorRegistro = {
            dni_usuario: '',
            nombre_usuario: '',
            contrasenia: ''
        }
    }

    handleChangeRegistro(data: any, index: any) {
        if (index == 1) {
            this.errorRegistro.dni_usuario = '';
        } else if (index == 2) {
            this.errorRegistro.nombre_usuario = '';
        } else if (index == 3) {
            this.errorRegistro.contrasenia = '';
        }
    }

    successModal(): any {
        let errores = 0;
        this.limpiarErroresRegistro();
        
        let lista = localStorage.getItem('Usuarios'); //Obtener listado de Usuarios
        let dataUsuario = [];
        let validacion:any[] = lista? JSON.parse(lista) : [] //Validar si hay o no datos y devuelve array

        if (this.dataRegistro.dni_usuario == '' || this.dataRegistro.dni_usuario == null) {
            this.errorRegistro.dni_usuario = 'Definir DNI.';
            errores++;
        }
        if (this.dataRegistro.nombre_usuario == '' || this.dataRegistro.nombre_usuario == null) {
            this.errorRegistro.nombre_usuario = 'Definir usuario.';
            errores++;
        }
        if (this.dataRegistro.contrasenia == '' || this.dataRegistro.contrasenia == null) {
            this.errorRegistro.contrasenia = 'Definir contraseña.';
            errores++;
        }
        if(validacion.length != 0){
            if(this.id_usuario != ''){ //EDITAR
                validacion.map((element)=>{
                    if(element.dni_usuario == this.dataRegistro.dni_usuario && element.dni_usuario != this.id_usuario){
                        this.errorRegistro.dni_usuario = 'DNI ya se encuentra registrado.';
                        errores++;
                    }
                    if(element.nombre_usuario == this.dataRegistro.nombre_usuario && element.dni_usuario != this.id_usuario){
                        this.errorRegistro.nombre_usuario = 'Nombre de usuario ya se encuentra registrado.';
                        errores++;
                    }
                })
            } else { // REGISTRO
                validacion.map((element)=>{
                    if(element.dni_usuario == this.dataRegistro.dni_usuario){
                        this.errorRegistro.dni_usuario = 'DNI ya se encuentra registrado.';
                        errores++;
                    }
                    if(element.nombre_usuario == this.dataRegistro.nombre_usuario){
                        this.errorRegistro.nombre_usuario = 'Nombre de usuario ya se encuentra registrado.';
                        errores++;
                    }
                })
            }
        }

        if (errores != 0) {
            return false;
        }

        /*if (this.maxPagoCompromiso < parseFloat(this.dataRegistro.monto_compromiso_pago)) {
            this.messageService.add({ key: 'key', severity: 'warn', summary: '¡AVISO!', detail: `El monto para compromiso de pago es mayor a la cantidad facturada, ${this.maxPagoCompromiso}` });
            //this.modalError.mostrarModal('Error', `El monto para compromiso de pago es mayor a la cantidad de la deuda, ${this.maxPagoCompromiso}`);
            return false;
        }*/

        //const emiter = this.modalRegistro.get_successEmiter();
        this.loader.activarLoading();
        let registroUsuario = {};

        if(this.id_usuario != ''){
            //EDITAR
            
            dataUsuario = validacion;
            dataUsuario.map((element)=>{
                if(element.dni_usuario == this.id_usuario){
                    element.id_usuario = this.dataRegistro.dni_usuario;
                    element.dni_usuario = this.dataRegistro.dni_usuario;
                    element.nombre_usuario = this.dataRegistro.nombre_usuario;
                    element.contrasenia = this.dataRegistro.contrasenia;
                    element.estado = this.dataRegistro.estado;
                }
            })
            localStorage.setItem('Usuarios', JSON.stringify(dataUsuario));

        } else {
            //REGISTRO
            if(validacion.length != 0){
                dataUsuario = validacion;

                registroUsuario = {
                    id_usuario: this.dataRegistro.dni_usuario,
                    dni_usuario: this.dataRegistro.dni_usuario,
                    nombre_usuario: this.dataRegistro.nombre_usuario,
                    contrasenia: this.dataRegistro.contrasenia,
                    estado: this.dataRegistro.estado
                }
                dataUsuario.push(registroUsuario);
                localStorage.setItem('Usuarios', JSON.stringify(dataUsuario));
            } else {
                registroUsuario = {
                    id_usuario: this.dataRegistro.dni_usuario,
                    dni_usuario: this.dataRegistro.dni_usuario,
                    nombre_usuario: this.dataRegistro.nombre_usuario,
                    contrasenia: this.dataRegistro.contrasenia,
                    estado: this.dataRegistro.estado
                }
                dataUsuario.push(registroUsuario);
                localStorage.setItem('Usuarios', JSON.stringify(dataUsuario));
            }
        }
        setTimeout(() => {
            this.loader.ocultarLoading();
            const emiter = this.modalRegistro.get_successEmiter();
            this.success.emit(emiter);
            this.modalRegistro.ocultarModal();
            this.limpiarFormularioRegistro();
        }, 1000);
    }

    hiddenModal() {
        this.modalRegistro.ocultarModal();
        this.hidden.emit('canceladoRegistro');
        this.limpiarFormularioRegistro();
    }

}
