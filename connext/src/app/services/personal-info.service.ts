import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService {
  private readonly baseUrl = environment.baseUrl + '/api';

  constructor(private readonly http: HttpClient) {}

  patchPersonalInfo = (personalInfo: any) =>
    this.http.patch(`${this.baseUrl}/api/users/personal-info`, personalInfo);

  putNameChange = (name: string) => null;

  putEmailChange = (email: string) => null;

  putDateOfBirthChange = (dateOfBirth: Date) => null;
}
