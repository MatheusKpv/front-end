import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaFuncionarioComponent } from './lista-funcionario/lista-funcionario.component';

const routes: Routes = [
  {path: '', redirectTo:'/lista', pathMatch: 'full'},
  {path: 'lista', component: ListaClientesComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'funcionario/:id', component: ListaClientesComponent},
  {path: 'funcionario',
    children: [
      {
        path: '',
        component: ListaFuncionarioComponent,
      },
      {
        path: 'lista',
        component: ListaFuncionarioComponent,
      },
      {
        path: 'formulario',
        component: FormularioComponent,
      },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
