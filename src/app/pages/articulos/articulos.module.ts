import { ArticulosComponent } from './articulos.component';
import { ComponentsModule } from './../../components/components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';


@NgModule({
  declarations: [ArticulosComponent],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    ComponentsModule
  ]
})
export class ArticulosModule { }
