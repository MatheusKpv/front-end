import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private listaProdutos = new BehaviorSubject<Produto[]>([]);
  $produtos = this.listaProdutos.asObservable();
  contId = 1;

  constructor() { }

  findById(paramId: number): Produto | undefined {
    return this.listaProdutos.value.find(p => p.id == paramId);
  }

  remove(id: number) {
    const listaAtualizada = this.listaProdutos.value.filter(p => p.id !== id);
    this.listaProdutos.next(listaAtualizada);
  }

  cadastra(produto: Produto) {
    if (produto.id) {
      const listaAtualizada: Produto[] = this.listaProdutos.value.map(p => p.id == produto.id ? produto : p);
      this.listaProdutos.next(listaAtualizada);
    } else {
      produto.id = this.contId++;
      this.listaProdutos.next([...this.listaProdutos.value, produto]);
    }
  }
}
