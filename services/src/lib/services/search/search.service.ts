import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private http: HttpClient) { }

  get(results: number = 20, page: number = 1, search: string = '') {
    return this.http.get<SearchResponse>(`https://randomuser.me/api/?results=${results}&page=${page}`)
  }
}
