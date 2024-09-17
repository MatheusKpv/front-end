import { Component } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss'
})
export class ConteudoComponent {
  clientes: any[] = [];
  recebeForm(event:any) {
    this.clientes.push(event);
  }
  recebeFormEditado(event:any) {
    console.log(event);

    console.log(this.clientes.findIndex(c => c.id === event.id));
    const index = this.clientes.findIndex(c => c.id === event.id);
    let cliente = this.clientes[index];
    cliente.nome = event.nome;
    cliente.email = event.email;
    cliente.fone = event.fone;
  }
  recebeEnvio(idCliente:any) {
    console.log('teste');
  }
}
