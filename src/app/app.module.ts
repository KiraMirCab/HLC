import { NoticiasModule } from './pages/noticias/noticias.module';
import { ArticulosModule } from './pages/articulos/articulos.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    ComponentsModule,
    ArticulosModule,
    NoticiasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
