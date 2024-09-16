import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  n1 = null;
  n2 = null;
  sinal = '/';
  nome = '';

  @Output() enviaResultado = new EventEmitter<number>();

  calcula() {

    let resultado = this.geraResultado();
    console.log(resultado);

    this.enviaResultado.emit(resultado);
    this.n1 = null;
    this.n2 = null;
  }

  geraResultado() {
    switch (this.sinal) {
      case '/':
        return Number(this.n1) / Number(this.n2);
      case '*':
        return Number(this.n1) * Number(this.n2);
      case '+':
        return Number(this.n1) + Number(this.n2);
      case '-':
        return Number(this.n1) - Number(this.n2);
      default:
        return 0;
    }
  }
  @Output() enviaNome = new EventEmitter<string>();
  geraNome() {
    this.enviaNome.emit(this.nome)
  }
}
