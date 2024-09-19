import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  private listaProdutos = new BehaviorSubject<Produto[]>([]);
  produtos$ = this.listaProdutos.asObservable();
  cont = 1;

  cadastra(produto: Produto) {
    produto.id = this.cont++;
    this.listaProdutos.next([...this.listaProdutos.value, produto])
  }
  atualiza(produto: Produto) {
    const listaAtualizada: Produto[] = this.listaProdutos.value.map(p =>
      p.id === produto.id ? produto : p
    );
    this.listaProdutos.next(listaAtualizada);
  }
  remove(id?: number) {
    const listaAtual = this.listaProdutos.value;
    const listaAtualizada = listaAtual.filter(p => p.id !== id);
    this.listaProdutos.next(listaAtualizada);
  }

  findById(id: number) {
    return this.listaProdutos.value.find(p => p.id == id);
  }
}
