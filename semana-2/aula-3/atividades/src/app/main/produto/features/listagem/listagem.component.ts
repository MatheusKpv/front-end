import { Component } from '@angular/core';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {
  listaProdutos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {};

  ngOnInit(): void {
    this.produtoService.produtos$.subscribe(p => {
      this.listaProdutos = p;
    })
  }

  removeProduto(produto: Produto) {
    this.produtoService.remove(produto.id);
  }
}
