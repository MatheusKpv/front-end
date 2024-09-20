import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'carinho', pathMatch:'full'},
  {path:'carinho', loadChildren: () => import('./main/carinho/carinho.module').then(c => c.CarinhoModule)},
  {path:'produto', loadChildren: () => import('./main/produto/produto.module').then(p => p.ProdutoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
