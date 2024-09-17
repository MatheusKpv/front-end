import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-funcionario',
  templateUrl: './lista-funcionario.component.html',
  styleUrl: './lista-funcionario.component.scss'
})
export class ListaFuncionarioComponent {
  cont = null;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const productId = params['id'];
    });
  }
  envia() {

  }
}
