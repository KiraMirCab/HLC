import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  public articulos:Article[]=[
    {
      nombre: "Super Patata",
      precio: 19,
      descuento: true,
      descripcion: "Un comic para los pequeños, aunque los padres también disfrutarán de su sentido de humor.",
    },
    {
      nombre: "Super Patata 2",
      precio: 20,
      descuento: true,
      descripcion: "Segunda parte del famoso comic para niños.",
      img: "../../assets/Images/SuperPatata.jpg"
    },
    {
      nombre: "Pinoccio",
      precio: 35,
      descuento: false,
      descripcion: "La historia que se leyó caso cada adulto cuando era niño."

    },
    {
      nombre: "Guerra y Paz",
      precio: 105.45,
      descuento: true,
      descripcion: "Novela épica de amor y de querra, mejor que Game of Thrones sin duda. "
    },
 
 
  ]
  constructor() { }

  ngOnInit(): void {
  }

  pulsaBoton(indice:number) {

    this.articulos[indice].descuento = ! this.articulos[indice].descuento
  }

  calculaPrecio(n:number):number {
    return Math.round(80 * n) / 100;
  }

}
