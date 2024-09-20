import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { Router } from '@angular/router';
import { ProdutoService } from '../../service/produto.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit{
  listaProdutos: Produto[] = [];

  constructor(private service: ProdutoService, private router: Router) {};

  ngOnInit(): void {
    this.service.$produtos.subscribe(p => {
      this.listaProdutos = p;
    })
  }

  removeProduto(produto: Produto) {
    this.service.remove(produto.id!);
  }

}
