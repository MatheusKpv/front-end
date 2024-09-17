import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.cliente) {
      console.log('jsfoi');
      const cliente = {
        id: this.id,
        nome: this.nomeInput,
        email: this.emailInput,
        fone: this.foneInput
      }
      this.nomeInput = '';
      this.emailInput = '';
      this.foneInput = '';
      this.outEnviaClienteEditado.emit(cliente);
    }

  }
  nomeInput = '';
  emailInput = '';
  foneInput = '';
  id = 0;
  @Output() outEnvia = new EventEmitter<Object>();
  @Output() outEnviaClienteEditado = new EventEmitter<Object>();
  @Input() cliente:any = null;

  envia() {
    this.id++
    const cliente = {
      id: this.id,
      nome: this.nomeInput,
      email: this.emailInput,
      fone: this.foneInput
    }
    this.nomeInput = '';
    this.emailInput = '';
    this.foneInput = '';
    this.outEnvia.emit(cliente);
  }


}
