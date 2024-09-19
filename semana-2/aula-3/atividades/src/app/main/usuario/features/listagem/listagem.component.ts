import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent implements OnInit{
  listaUsuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {};

  ngOnInit(): void {
    this.usuarioService.usuarios$.subscribe(c => {
      this.listaUsuarios = c;
    })
  }

  removeUsuario(usuario: Usuario) {
    this.usuarioService.remove(usuario.id);
  }
}
