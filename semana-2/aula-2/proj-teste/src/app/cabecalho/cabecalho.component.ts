import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {
  constructor (private router: Router) { };
  input:number | null = null;

  @Input() titulo?: string;

  pesquisa() {
    this.router.navigate(['/formulario', this.input])
    this.input = null;
  }
}
