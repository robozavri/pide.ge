import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { QueryResponse } from '../models/query-response';
import { Faq } from '../models/faq';

const API_URL = environment.apiUrl;

@Injectable()
export class FaqApiService {
  constructor(private http: HttpClient) { }

  getByQuery(params): Observable<QueryResponse<Faq>> {
    return this.http.get<any>(`${API_URL}/api/faqs`, {
      params,
    });
  }
}
