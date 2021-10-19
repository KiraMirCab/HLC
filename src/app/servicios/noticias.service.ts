import { Noticia, Respuesta } from './../interfaces/respuesta';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private _http:HttpClient) { }

  getNoticias() {
    return new Promise<Respuesta>((resolve, reject) => {
      const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-09-15&sortBy=publishedAt&apiKey=bacaa389873647768efcc5a594f34c17'
      this._http.get<Respuesta>(url).subscribe(respuesta=>{
        resolve(respuesta);
      }, err=>{
        console.log('Hay un error en el get')
        reject(err);
      });
    });
  }
}
