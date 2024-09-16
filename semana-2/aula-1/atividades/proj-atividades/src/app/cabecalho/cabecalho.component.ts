import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
  input:string = '';

  @Input() titulo?: string;
  @Output() envio = new EventEmitter<string>();

  pesquisa() {
    this.envio.emit(this.input)
  }
}
