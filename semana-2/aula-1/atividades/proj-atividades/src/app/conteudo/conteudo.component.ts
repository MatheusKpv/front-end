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
}
