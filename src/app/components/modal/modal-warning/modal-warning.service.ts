import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Modal } from '@app/models/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalWarningService {
  private _modal_warning: Modal;
  private modal_warning$: Subject<Modal>;
  private _tituloModal: string = '';
  private _contenidoModal: string = '';
  private _successEmiter: string = '';

  constructor() {
    this._modal_warning = { estado: 'ocultar', titulo: '', contenido: '' };
    this.modal_warning$ = new Subject<Modal>();

  }

  mostrarModal(titulo: string, contenido: string, successEmiter: string) {
    this.modal_warning$.next({
      estado: 'mostrar',
      titulo: titulo,
      contenido: contenido,
      successEmiter: successEmiter,
    });
    this.set_tituloModal(titulo);
    this.set_contenidoModal(contenido);
    this.set_successEmiter(successEmiter);
  }

  Modal$(): Observable<Modal> {
    return this.modal_warning$.asObservable();
  }

  ocultarModal() {
    this.modal_warning$.next({
      estado: 'ocultar',
      titulo: this.get_tituloModal(),
      contenido: this.get_contenidoModal(),
    });
    this.set_tituloModal('');
    this.set_contenidoModal('');
    this.set_successEmiter('');
  }

  get_tituloModal(): string {
    return this._tituloModal;
  }

  set_tituloModal(value: string) {
    this._tituloModal = value;
  }

  get_contenidoModal(): string {
    return this._contenidoModal;
  }

  set_contenidoModal(value: string) {
    this._contenidoModal = value;
  }

  get_successEmiter(): string {
    return this._successEmiter;
  }

  set_successEmiter(value: string) {
    this._successEmiter = value;
  }
}
