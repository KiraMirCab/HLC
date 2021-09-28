import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
