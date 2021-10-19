import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './pages/articulos/articulos.component';


const rutas:Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"noticias",
    loadChildren: ()=> import('./pages/noticias/noticias.module').then(m=>m.NoticiasModule)
  },
  {
    path:"articulos",
    loadChildren: ()=> import('./pages/articulos/articulos.module').then(m=>m.ArticulosModule)
  },
  {
    path:"sugerencias",
    loadChildren: ()=> import('./pages/sugerencias/sugerencias.module').then(m=>m.SugerenciasModule)
  },
  {
    path:"**",
    redirectTo: "inicio"
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
