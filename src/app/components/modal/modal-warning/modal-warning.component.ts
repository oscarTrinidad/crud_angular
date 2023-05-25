import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Modal } from '@app/models/modal';
import { ModalWarningService } from './modal-warning.service';

@Component({
  selector: 'app-modal-warning',
  templateUrl: './modal-warning.component.html',
  styleUrls: ['./modal-warning.component.scss'],
})
export class ModalWarningComponent implements OnInit {
  modalwarning: Modal;

  @Output() hidden = new EventEmitter();
  @Output() success = new EventEmitter();

  constructor(private _modal: ModalWarningService) {
    this.modalwarning = { estado: 'ocultar', titulo: '', contenido: '' };
  }

  ngOnInit(): void {
    this._modal.Modal$().subscribe((response) => {
      this.modalwarning = response;
    });
  }

  hiddenModal() {
    this._modal.ocultarModal();
    this.hidden.emit('cancelado');
  }

  successModal() {
    const emiter = this._modal.get_successEmiter();
    this.success.emit(emiter);
    this._modal.ocultarModal();
  }
}
