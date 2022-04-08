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

  create(data): Observable<any> {
    return this.http.post(`${API_URL}/api/stories`, data, {
      responseType: 'text',
    });
  }

  update(data): Observable<any> {
    return this.http.put(`${API_URL}/api/stories/${data._id}`, data, {
      responseType: 'text',
    });
  }

  updatePositions(data): Observable<any> {
    return this.http.patch(`${API_URL}/api/stories/positions`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/api/stories/${id}`, {
      responseType: 'text',
    });
  }

}
