import { Article } from './../../interfaces/article';
import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/servicios/articulo.service';
import { MenuItem } from '../../interfaces/menu-item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public miSubscripcion:Subscription;
  public comprados:number = 0;

  public items:MenuItem[] = [
    {
      ruta: 'inicio',
      texto: 'Página inicial'
    },
    {
      ruta: 'noticias',
      texto: 'Noticias'
    },
    {
      ruta: 'articulos',
      texto: 'Articulos disponibles'
    },
    {
      ruta: 'sugerencias',
      texto: 'Sugerencias'
    }
  ];

  constructor(private _articuloService:ArticuloService) { }

  getTexto(indice:number){
    let cadenaComprados = this.comprados ===0 ? '' : ' (Comprados : ' + this.comprados +')';
    if(indice == 2){
      return this.items[indice].texto + cadenaComprados;;
    }
    return this.items[indice].texto;
  }

  ngOnInit(): void {
    this.miSubscripcion = this._articuloService.emiteCompraArticulo.subscribe((data:Article)=>{
      this.comprados++;
      console.log(data.nombre + ' comprado');
    })
  }

  ngOnDestroy():void{
    this.miSubscripcion.unsubscribe();
    console.log('Eliminamos la subscripción');
  }
}