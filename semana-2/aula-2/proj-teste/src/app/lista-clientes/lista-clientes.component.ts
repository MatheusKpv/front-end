import { Cliente } from '../model/cliente';
import { ClienteService } from './../services/cliente.service';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.scss',
})
export class ListaClientesComponent implements OnInit{

  constructor (private clienteService: ClienteService) { };

  ngOnInit(): void {
    this.clienteService.clientes$.subscribe(c => this.listaClientes = c);
  }

  listaClientes: Cliente[] =[];

  removeCliente(cliente: Cliente) {
    const index = this.listaClientes.findIndex(c => c.id == cliente.id);
    this.listaClientes.splice(index, 1);

    // CASO PROBLEMA COM EXCLUSAO - ATUALIZAR LISTA
    // this.clienteService.updateClientes(this.listaClientes);
  }
}
