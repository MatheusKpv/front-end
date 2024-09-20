import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { CabecalhoComponent } from './features/cabecalho/cabecalho.component';
import { ListaComponent } from './features/lista/lista.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoComponent,
    CabecalhoComponent,
    ListaComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
