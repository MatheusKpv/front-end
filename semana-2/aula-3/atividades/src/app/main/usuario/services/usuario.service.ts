import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  private listaUsuarios = new BehaviorSubject<Usuario[]>([]);
  usuarios$ = this.listaUsuarios.asObservable();
  cont = 1;

  cadastra(usuario: Usuario) {
    usuario.id = usuario.id ? usuario.id : this.cont++;
    this.listaUsuarios.next([...this.listaUsuarios.value, usuario])
  }
  atualiza(usuario: Usuario) {
    const listaAtualizada: Usuario[] = this.listaUsuarios.value.map(u =>
      u.id === usuario.id ? usuario : u
    );
    this.listaUsuarios.next(listaAtualizada);
  }
  remove(id?: number) {
    const listaAtual = this.listaUsuarios.value;
    const listaAtualizada = listaAtual.filter(u => u.id !== id);
    this.listaUsuarios.next(listaAtualizada);
  }

  findById(id: number) {
    return this.listaUsuarios.value.find(u => u.id == id);
  }
}
