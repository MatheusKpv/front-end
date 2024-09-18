import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroModuloComponent } from './primeiro-modulo.component';
import { SegundoModuloComponent } from '../segundo-modulo/segundo-modulo.component';
import { SegundoModuloModule } from '../segundo-modulo/segundo-modulo.module';



@NgModule({
  declarations: [
    PrimeiroModuloComponent
  ],
  imports: [
    CommonModule,
    SegundoModuloModule
  ],
  exports: [
    PrimeiroModuloComponent
  ]
})
export class PrimeiroModuloModule { }
