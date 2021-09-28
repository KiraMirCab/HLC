import { SugerenciasComponent } from './pages/sugerencias/sugerencias.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';


const rutas:Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"noticias",
    component: NoticiasComponent
  },
  {
    path:"articulos",
    component: ArticulosComponent
  },
  {
    path:"sugerencias",
    component: SugerenciasComponent
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
