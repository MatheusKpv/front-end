import { ClienteService } from './../services/cliente.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent implements OnInit{

  nomeInput = '';
  emailInput = '';
  foneInput = '';
  id = 0;
  listaClientes:Cliente[] = [];
  clienteEdit: Cliente | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private clienteService: ClienteService) {

  }
  ngOnInit(): void {
    this.clienteService.clientes$.subscribe(c => {
      this.listaClientes = c;
      this.id = (c.reduce((maior, cliente) => cliente.id > maior ? cliente.id : maior, 0)) + 1;

      this.route.params.subscribe(params => {
        const productId = params['id'];

        if (productId) {
          this.clienteEdit = this.listaClientes.find(c => c.id == productId) || null;
          if (this.clienteEdit) {
            this.nomeInput = this.clienteEdit.nome;
            this.emailInput = this.clienteEdit.email;
            this.foneInput = this.clienteEdit.fone
          } else {
            this.router.navigate(['lista'])
          }
        }
      })
    })
  }

  envia() {
    const cliente: Cliente = {
      id: this.clienteEdit ? this.clienteEdit.id : this.id,
      nome: this.nomeInput,
      email: this.emailInput,
      fone: this.foneInput
    }
    if (this.clienteEdit !== null) {
      const index = this.listaClientes.findIndex(c => c.id == this.clienteEdit?.id);
      this.listaClientes[index] = cliente;
      this.clienteEdit = null;
    } else {
      this.listaClientes.push(cliente);
    }
    this.clienteService.updateClientes(this.listaClientes);
    this.router.navigate(['/lista']);
  }
}
