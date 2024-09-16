import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  nomeInput = '';
  emailInput = '';
  foneInput = '';

  @Output() outEnvia = new EventEmitter<Object>()

  envia() {
    const cliente = {
      nome : this.nomeInput,
      email : this.emailInput,
      fone : this.foneInput
    }
    // const msg = `
    // ${this.nomeInput}
    // ${this.emailInput}
    // ${this.foneInput}`
    this.outEnvia.emit(cliente);
  }
}
