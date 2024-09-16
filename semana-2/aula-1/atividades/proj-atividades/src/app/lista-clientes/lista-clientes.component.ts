import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.scss'
})
export class ListaClientesComponent {

  @Input() clientes?:any;
}
