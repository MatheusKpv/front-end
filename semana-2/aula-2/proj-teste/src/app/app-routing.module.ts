import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'lista'},
  {path: 'lista', component: ListaClientesComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario/:id', component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
