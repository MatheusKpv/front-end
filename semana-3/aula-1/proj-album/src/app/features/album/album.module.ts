import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AlbumModule { }
