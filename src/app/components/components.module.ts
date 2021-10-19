import { PipesModule } from './../Pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';



@NgModule({
  declarations: [
    ArticuloComponent,
    MenuComponent,
    NoticiaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    ArticuloComponent,
    MenuComponent,
    NoticiaComponent
  ]
})
export class ComponentsModule { }
