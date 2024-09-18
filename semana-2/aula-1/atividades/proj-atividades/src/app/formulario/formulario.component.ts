import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (this.clienteEdit) {
      this.nomeInput = this.clienteEdit.nome;
      this.emailInput = this.clienteEdit.email;
      this.foneInput = this.clienteEdit.fone;
    }
  }
  nomeInput = '';
  emailInput = '';
  foneInput = '';
  id = 0;
  @Output() outEnvia = new EventEmitter<Object>();
  @Output() outEnviaEdit = new EventEmitter<Object>();
  @Input() clienteEdit:any = null;

  envia() {
    const cliente = {
      id: this.clienteEdit ? this.clienteEdit.id : this.id++,
      nome: this.nomeInput,
      email: this.emailInput,
      fone: this.foneInput
    }
    this.nomeInput = '';
    this.emailInput = '';
    this.foneInput = '';
    if (this.clienteEdit !== null) {
      this.clienteEdit = null;
      this.outEnviaEdit.emit(cliente);
    } else {
      this.outEnvia.emit(cliente);
    }
  }


}
