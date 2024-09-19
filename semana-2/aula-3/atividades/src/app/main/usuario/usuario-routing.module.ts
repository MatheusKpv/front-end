import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './features/listagem/listagem.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
    path: '', component: UsuarioComponent, children: [
      {path: '', redirectTo: 'listagem', pathMatch: 'full'},
      {path: 'listagem', component: ListagemComponent},
      {path: 'cadastro', component: CadastroComponent},
      {path: 'cadastro/:id', component: CadastroComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
