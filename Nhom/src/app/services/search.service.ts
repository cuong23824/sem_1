import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private apiSearchUrl = 'http://localhost:3000/api/search';
  constructor(private http: HttpClient) { }

  getSuggestions(query: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.apiSearchUrl}?name=${query}`);
  }
  
}
