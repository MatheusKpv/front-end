import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  nomeInput: string = '';
  emailInput: string = '';
  foneInput: string = '';
  usuarioEdit?: Usuario = undefined;

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      const paramId = p['id'];
      if (paramId) {
        this.usuarioEdit = this.usuarioService.findById(paramId);
        if (this.usuarioEdit) {
          this.nomeInput = this.usuarioEdit.nome;
          this.emailInput = this.usuarioEdit.email;
          this.foneInput = this.usuarioEdit.fone;
        } else {
          this.router.navigate(['/usuario/listagem']);
        }
      };
    })
  }

  cadastra() {
    const usuario: Usuario = {
      id: this.usuarioEdit ? this.usuarioEdit.id : undefined,
      nome: this.nomeInput,
      email: this.emailInput,
      fone: this.foneInput
    }
    if (this.usuarioEdit) {
      this.usuarioService.atualiza(usuario);
      this.usuarioEdit = undefined;
    } else {
      this.usuarioService.cadastra(usuario);
    }
    this.router.navigate(['/usuario/listagem']);
  }
}
