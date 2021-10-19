import { EventEmitter, Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  public emiteCompraArticulo:EventEmitter<Article> = new EventEmitter();
  constructor() { }
}
