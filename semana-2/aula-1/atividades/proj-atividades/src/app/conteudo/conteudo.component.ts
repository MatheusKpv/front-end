import { Component } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss'
})
export class ConteudoComponent {
  clientes: any[] = [];
  clienteEdit = null;
  recebeForm(event:any) {
    this.clientes.push(event);
  }
  recebeFormEditado(event:any) {
    const index = this.clientes.findIndex(c => c.id === event.id);
    let cliente = this.clientes[index];
    cliente.nome = event.nome;
    cliente.email = event.email;
    cliente.fone = event.fone;
  }
  recebeEnvio(cliente:any) {
    this.clienteEdit = cliente;
  }
}
