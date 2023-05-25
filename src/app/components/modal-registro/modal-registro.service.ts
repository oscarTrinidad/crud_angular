import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class ModalRegistroService {

  private modal_registro$: Subject<string>;
  private modal_registro : string;
  private _successEmiter: string = '';

  constructor() {
    this.modal_registro = 'ocultar';
    this.modal_registro$ = new Subject<string>();
  }

  mostrarModal(successEmiter: string) {
    this.modal_registro$.next('mostrar');
    this.set_successEmiter(successEmiter);
  }

  observarModal$(): Observable<string> {
    return this.modal_registro$.asObservable();
  }

  ocultarModal() {
    this.modal_registro$.next('ocultar');
    this.set_successEmiter('');
  }

  get_successEmiter(): string {
    return this._successEmiter;
  }

  set_successEmiter(value: string) {
    this._successEmiter = value;
  }

}
