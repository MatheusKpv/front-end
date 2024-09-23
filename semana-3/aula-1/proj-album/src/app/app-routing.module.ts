import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './features/album/album.component';

const routes: Routes = [
  {path: '', redirectTo: 'album', pathMatch: 'full'},
  {path: 'album', component: AlbumComponent},
  {path: 'album/:id', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
