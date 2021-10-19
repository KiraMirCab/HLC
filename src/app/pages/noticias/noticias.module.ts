import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasComponent } from './noticias.component';
import { NoticiasRoutingModule } from './noticias-routing.module';


@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    ComponentsModule
  ]
})
export class NoticiasModule { }
