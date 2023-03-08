import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchGifsResponse} from "../interfaces/gifs.interface";

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  //TODO: cambiar any por su tipo correspondiente
  public results: Gif[] = [];

  private _historial: string[] = [];
  private _apiKey: string = 'tlez1hAB3wfOH3VFyFZxmvthJjiJ1Acp';
  private _serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  constructor(private _http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
   /* if (localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }*/
  }

  get historial() {
    return [...this._historial];
  }

  public searchGifs(query: string): void {
    query = query.trim().toLocaleLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this.historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    this._http.get<SearchGifsResponse>(`${this._serviceUrl}/search`, { params})
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      })


  }
}
