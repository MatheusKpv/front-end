import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarinhoRoutingModule } from './carinho-routing.module';
import { CarinhoComponent } from './carinho.component';
import { CabecalhoComponent } from './features/cabecalho/cabecalho.component';
import { ListaComponent } from './features/lista/lista.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarinhoComponent,
    CabecalhoComponent,
    ListaComponent,
    CadastroComponent
  ],
  imports: [
    CommonModule,
    CarinhoRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarinhoModule { }
