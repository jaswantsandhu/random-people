import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<SearchResponse>("https://randomuser.me/api/?results=20&page=1")
  }
}
