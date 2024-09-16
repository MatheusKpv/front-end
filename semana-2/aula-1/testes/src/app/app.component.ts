import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testes';
  resultado?:number;
  nome = '';

  recebeResultado(event: number) {
    this.resultado = event;
  }
  recebeNome(event: string) {
    this.nome = event
  }
}
