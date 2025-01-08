import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  uploadProfileImage = (userId: number, file: File) => {
    const formData: FormData = new FormData();
    formData.append('userId', userId.toString());
    formData.append('file', file);

    const headers = new HttpHeaders({
      Accept: 'text/plain',
    });
    return this.http.post<string>(
      `${this.baseUrl}/api/users/uploadProfileImage`,
      formData,
      { headers, responseType: 'text' as 'json' }
    );
  };
}
