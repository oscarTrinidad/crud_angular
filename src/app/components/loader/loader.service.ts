import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loader: string;
  private loader$: Subject<string>;

  constructor() {
    this.loader = 'ocultar';
    this.loader$ = new Subject<string>();
  }

  activarLoading() {
    this.loader$.next('mostrar');
  }

  Loader$(): Observable<string> {
    return this.loader$.asObservable();
  }

  ocultarLoading() {
    this.loader$.next('ocultar');
  }
}
