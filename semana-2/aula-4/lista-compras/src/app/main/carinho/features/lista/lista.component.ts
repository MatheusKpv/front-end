import { Component, OnInit } from '@angular/core';
import { Carinho } from '../../models/carinho';
import { CarinhoService } from '../../services/carinho.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit {
  listaProdutos: Carinho[] = [];

  constructor(private service: CarinhoService, private router: Router) {};

  ngOnInit(): void {
    this.service.$produtos.subscribe(p => {
      this.listaProdutos = p;
    })
  }
  
  removeProduto(produto: Carinho) {
    this.service.remove(produto.id!);
  }

}
