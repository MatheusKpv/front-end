import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
  input: number | undefined = undefined;

  constructor(private router: Router) { };
  pesquisa() {

    if (this.input) {
      console.log(this.input);
      this.router.navigate(['album', this.input]);
      this.input = undefined;
    }
  }
}
