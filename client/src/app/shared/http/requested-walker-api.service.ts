import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { QueryResponse } from '../models/query-response';
import { RequestedWalker } from '../models/requested-walker';

const API_URL = environment.apiUrl;

@Injectable()
export class RequestedWalkerApiService {
  constructor(private http: HttpClient) { }

  getByQuery(params): Observable<QueryResponse<RequestedWalker>> {
    return this.http.get<any>(`${API_URL}/api/requested-walkers`, {
      params,
    });
  }
}
