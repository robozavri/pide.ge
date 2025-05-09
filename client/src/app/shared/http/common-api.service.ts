import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { QueryResponse } from '../models/query-response';
import { Common } from '../models/common';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable()
export class CommonApiService {

  constructor(private http: HttpClient) { }

  getOne(): Observable<Common> {
    return this.http.get<any>(`${API_URL}/api/commons/one`);
  }
}
