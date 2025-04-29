import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, switchMap } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService
  ) {}

  saveBio = (bio: string) =>
    this.userService.getUserId().pipe(
      filter((userId) => userId != undefined),
      switchMap((userId: string | number) => {
        const params = new HttpParams()
          .set('userId', userId.toString())
          .set('bio', bio);
        return this.http.post(this.baseUrl + '/api/users/add-bio', params);
      })
    );
}
