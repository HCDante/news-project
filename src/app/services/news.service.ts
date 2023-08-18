import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }


  private apiKey = 'a91c8129f8e04631a9293d310a679ce9'; // Reemplaza con tu propia API Key
  private apiUrl = 'https://newsapi.org/v2';
  //Your API key is: a91c8129f8e04631a9293d310a679ce9 

  obtenerNoticias(categoria: string, pais: string): Observable<any> {
    const url = `${this.apiUrl}/top-headlines?country=${pais}&category=${categoria}&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

}


