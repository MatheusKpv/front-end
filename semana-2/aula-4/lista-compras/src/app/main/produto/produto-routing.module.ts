import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { ListaComponent } from './features/lista/lista.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';

const routes: Routes = [
  {path: '', component: ProdutoComponent, children: [
    {path:'', redirectTo:'lista', pathMatch: 'full'},
    {path: 'lista', component: ListaComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'cadastro/:id', component: CadastroComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
