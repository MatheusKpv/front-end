import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
  input?:number = undefined;

  constructor(private router: Router) {};

  pesquisa() {
    if (this.input) {
      this.router.navigate(['/usuario/cadastro', this.input]);
      this.input = undefined;
    }
  }
}
