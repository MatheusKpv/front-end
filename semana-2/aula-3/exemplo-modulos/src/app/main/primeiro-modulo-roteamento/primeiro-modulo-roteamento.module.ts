import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeiroModuloRoteamentoRoutingModule } from './primeiro-modulo-roteamento-routing.module';
import { PrimeiroModuloRoteamentoComponent } from './primeiro-modulo-roteamento.component';
import { ListagemComponent } from './features/listagem/listagem.component';


@NgModule({
  declarations: [
    PrimeiroModuloRoteamentoComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    PrimeiroModuloRoteamentoRoutingModule
  ]
})
export class PrimeiroModuloRoteamentoModule { }
