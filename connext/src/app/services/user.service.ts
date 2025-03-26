import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { User } from '../models/user.model';
import { setUserData } from '../store/user/user.actions';
import { selectUserId } from '../store/user/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl = environment.baseUrl + '/api/users';

  constructor(
    private readonly store: Store,
    private readonly http: HttpClient
  ) {}

  testProfiles = [
    {
      image:
        'https://www.man-shop.eu/thumbnail/db/93/05/1726129673/MAN%20Lifestyle%20Merchandising%20Shop%20Bekleidung%20Herren_800x800.png',
      name: 'John Doe',
      lastMessage: 'Hello',
    },
    {
      image:
        'https://as2.ftcdn.net/v2/jpg/02/95/69/87/1000_F_295698768_8NS9qp5sJmOMCEQDbcpGTZd7DttKnAql.jpg',
      name: 'Jane Doe',
      lastMessage: 'Hi',
    },
  ];

  getUsers = (): Observable<User[]> => this.http.get<User[]>(`${this.baseUrl}`);

  dispatchUser = (user: any) => this.store.dispatch(setUserData({ user }));

  getUserId = () => this.store.select(selectUserId);
}
