import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  private clientesSource = new BehaviorSubject<Cliente[]>([])
  clientes$ = this.clientesSource.asObservable();

  updateClientes(clientes: Cliente[]): void {
    this.clientesSource.next(clientes);
  }
}
