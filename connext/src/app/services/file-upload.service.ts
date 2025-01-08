import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService
  ) {}

  uploadProfileImage = (file: File) => {
    const formData: FormData = new FormData();
    this.userService.getUserId().subscribe((userId?: string | number) => {
      console.log(userId);
      if (typeof userId === 'number') {
        formData.append('userId', userId.toString());
      } else if (typeof userId === 'string') {
        formData.append('userId', userId);
      } else {
        console.error('Invalid userId:', userId);
      }
    });

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
