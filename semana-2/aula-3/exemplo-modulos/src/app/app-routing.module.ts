import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'roteamento-modulo', pathMatch: 'full'},
  {
    path: 'roteamento-modulo', loadChildren: () => import('./main/primeiro-modulo-roteamento/primeiro-modulo-roteamento.module')
    .then(m => m.PrimeiroModuloRoteamentoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
