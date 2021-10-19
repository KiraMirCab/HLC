import { ComponentsModule } from './../../components/components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    ComponentsModule
  ]
})
export class ArticulosModule { }
