import { SugerenciasComponent } from './sugerencias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SugerenciasRoutingModule } from './sugerencias-routing.module';


@NgModule({
  declarations: [SugerenciasComponent],
  imports: [
    CommonModule,
    SugerenciasRoutingModule
  ]
})
export class SugerenciasModule { }
