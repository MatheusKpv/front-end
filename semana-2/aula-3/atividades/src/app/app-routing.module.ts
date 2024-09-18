import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'usuario', pathMatch: 'full'
  },
  {
    path: 'produto',
    loadChildren: () => import('./main/produto/produto.module').then(p => p.ProdutoModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./main/usuario/usuario.module').then(u => u.UsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
