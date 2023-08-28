import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoreminsupmService {

  private url = 'https://loripsum.net/api';

  constructor(private http: HttpClient) { }

  getLoreminsupm(paragraphs: number): Observable<string> {
    return this.http.get<any>(`${this.url}/{paragraphs}/short/plaintext`);
  }
}
