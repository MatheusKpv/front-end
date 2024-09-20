import { Injectable } from '@angular/core';
import { Carinho } from '../models/carinho';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarinhoService {
  private listaProdutos = new BehaviorSubject<Carinho[]>([]);
  $produtos = this.listaProdutos.asObservable();
  contId = 1;

  constructor() { }

  findById(paramId: number): Carinho | undefined {
    return this.listaProdutos.value.find(p => p.id == paramId);
  }

  remove(id: number) {
    const listaAtualizada = this.listaProdutos.value.filter(p => p.id !== id);
    this.listaProdutos.next(listaAtualizada);
  }

  cadastra(produto: Carinho) {
    console.log(produto);
    console.log(produto);
    if (produto.id) {
      const listaAtualizada: Carinho[] = this.listaProdutos.value.map(p => p.id == produto.id ? produto : p);
      this.listaProdutos.next(listaAtualizada);
    } else {
      produto.id = this.contId++;
      this.listaProdutos.next([...this.listaProdutos.value, produto]);
    }
  }

}
