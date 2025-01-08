import { HttpClient } from '@angular/common/http';
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

    return this.http.post<string>(
      `${this.baseUrl}api/users/uploadProfileImage`,
      formData
    );
  };
}
