import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, switchMap } from 'rxjs';
import { environment } from '../../environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService {
  private readonly baseUrl = environment.baseUrl + '/api';

  constructor(
    private readonly http: HttpClient,
    private readonly userService: UserService
  ) {}

  patchPersonalInfo = (personalInfo: any) =>
    this.http.patch(`${this.baseUrl}/api/users/personal-info`, personalInfo);

  putNameChange = (name: string) =>
    this.userService.getUserId().pipe(
      filter((userId) => userId != undefined),
      switchMap((userId: string | number) => {
        const params = new HttpParams()
          .set('userId', userId.toString())
          .set('newName', name);
        return this.http.put(this.baseUrl + '/users/name-change', params);
      })
    );

  putEmailChange = (email: string) => null;

  putDateOfBirthChange = (dateOfBirth: Date) => null;
}
