import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoreminsupmService {

  private url = 'https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text';

  constructor(private http: HttpClient) { }

  getLoreminsupm(): Observable<string> {
    return this.http.get<any>(this.url).pipe(
      map((response: any) => {
        const lorem = JSON.parse(response);
        console.log('Loreminsupm', lorem);
        
        return lorem;        
      })
  )}
}
