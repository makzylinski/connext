import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  putEmailChange = (email: string) => null;

  putDateOfBirthChange = (dateOfBirth: Date) => null;
}
