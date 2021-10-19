import { NoticiasService } from './../../servicios/noticias.service';
import { Noticia } from './../../interfaces/respuesta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  public noticias:Noticia[] = [];
  public autoresFavoritos: string[] = [];
  constructor(private _noticiasService:NoticiasService) { }

  async ngOnInit() {
    try {
      this.noticias = (await this._noticiasService.getNoticias()).articles;
    } catch (error) {
      console.log("Error recibiendo los datos de la promesa");
    }
  }
  guardaAutorEnFavoritos(autor:string){
    if(!this.autoresFavoritos.includes(autor)){
      this.autoresFavoritos.push(autor);
      console.log(this.autoresFavoritos.length);
    }
  }
}
