import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private readonly baseUrl = environment.baseUrl + '/api/matches';

  constructor(private readonly http: HttpClient) {}

  acceptUser = (matchId: number) => {
    const params = new HttpParams().set('matchId', matchId.toString());
    console.log('Accepted user:', params);
    this.http.post(`${this.baseUrl}/accept`, params).subscribe();
  };

  rejectUser = (matchId: number) => {
    console.log('Rejected user:', matchId);
  };

  getPairs = (): Observable<User[]> =>
    this.http.get<User[]>(`${this.baseUrl}/pairs`);
}
