import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


const API_URL = environment.apiUrl;

@Injectable()
export class FileApiService {

  constructor(private http: HttpClient) { }

  public createFiles(filesToAdd: File[], fileNamesToDestroy: string[], params: any): Observable<any> {
    const data = this.getFilesFormData(filesToAdd, fileNamesToDestroy, params);
    return this.http.post(`${API_URL}/api/files`, data);
  }

  public destroyFiles(fileNamesToDestroy: string[]): Observable<any> {
    const formData = new FormData();
    for (const file of fileNamesToDestroy) {
      formData.append('fileNamesToDestroy', file);
    }
    return this.http.post(`${API_URL}/api/files`, formData);
  }

  getFilesFormData(filesToAdd: File[], fileNamesToDestroy: string[], params: any): FormData {
    const formData = new FormData();
    formData.append('mobileWidth', params.mobileWidth);
    formData.append('mobileHeight', params.mobileHeight);
    formData.append('desktopWidth', params.desktopWidth);
    formData.append('desktopHeight', params.desktopHeight);

    for (const file of filesToAdd) {
      formData.append('filesToAdd', file);
    }
    for (const file of fileNamesToDestroy) {
      formData.append('fileNamesToDestroy', file);
    }
    return formData;
  }
}
