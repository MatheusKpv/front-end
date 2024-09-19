import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { CabecalhoComponent } from './features/cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { CadastroModule } from './features/cadastro/cadastro.module';
import { ListagemModule } from './features/listagem/listagem.module';


@NgModule({
  declarations: [
    UsuarioComponent,
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ListagemModule,
    CadastroModule
  ]
})
export class UsuarioModule { }
