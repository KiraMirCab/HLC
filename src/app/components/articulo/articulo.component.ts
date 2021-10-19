import { ArticuloService } from './../../servicios/articulo.service';
import { Article } from './../../interfaces/article';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() articulo:Article;

  constructor(private _articuloService:ArticuloService) { }

  ngOnInit(): void {
  }

  pulsaBoton() {
    this.articulo.descuento = !this.articulo.descuento;
  }

  calculaPrecio(n:number):number {
    return Math.round(80 * n) / 100;
  }

  pulsaBotonComprar() {
    this._articuloService.emiteCompraArticulo.emit(this.articulo);
  }

}
