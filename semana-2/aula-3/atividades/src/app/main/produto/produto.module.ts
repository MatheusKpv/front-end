import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { CabecalhoComponent } from './features/cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { ListagemModule } from './features/listagem/listagem.module';
import { CadastroModule } from './features/cadastro/cadastro.module';


@NgModule({
  declarations: [
    ProdutoComponent,
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    ListagemModule,
    CadastroModule
  ]
})
export class ProdutoModule { }
