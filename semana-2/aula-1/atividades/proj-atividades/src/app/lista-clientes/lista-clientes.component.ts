import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.scss',
})
export class ListaClientesComponent {
  @Input() clientes?: any;
  @Output() envia = new EventEmitter<any>();

  removeCliente(cliente:any) {
    const index = this.clientes.indexOf(cliente)
    this.clientes.splice(index, 1);
  }
  editaCliente(cliente:any) {
    this.envia.emit(cliente.id);
  }
}
