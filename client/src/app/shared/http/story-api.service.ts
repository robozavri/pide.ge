import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { QueryResponse } from '../models/query-response';
import { Story } from '../models/story';

const API_URL = environment.apiUrl;

@Injectable()
export class StoryApiService {
  constructor(private http: HttpClient) { }

  getByQuery(params): Observable<QueryResponse<Story>> {
    return this.http.get<any>(`${API_URL}/api/stories`, {
      params,
    });
  }
}
