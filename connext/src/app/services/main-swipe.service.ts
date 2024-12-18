import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class MainSwipeService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private readonly http: HttpClient) {}

  addUser = (user: any) => this.http.post(`${this.baseUrl}/api/users`, user);

  getUser = () => this.http.get(`${this.baseUrl}/api/users`);
}
