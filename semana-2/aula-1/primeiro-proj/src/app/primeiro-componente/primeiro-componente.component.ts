import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.scss'
})
export class PrimeiroComponenteComponent {
  msg = 'msg Enviada'
  botaoClicado() {
    console.log('enviado');
    this.evento.emit(this.msg);
  }

  @Output() evento = new EventEmitter<string>();
}
