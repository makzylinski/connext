import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class MainSwipeService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  addUser = (user: User) =>
    this.http.post<User>(`${this.baseUrl}/api/users`, user);

  getUser = () => this.http.get(`${this.baseUrl}/api/users`);
}
