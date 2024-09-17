import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaFuncionarioComponent } from './lista-funcionario/lista-funcionario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ConteudoComponent,
    FormularioComponent,
    ListaClientesComponent,
    ListaFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
