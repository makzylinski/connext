import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { MatchService } from '../../services/match.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-swipe',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule],
  standalone: true,
  templateUrl: './main-swipe.component.html',
  styleUrl: './main-swipe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSwipeComponent implements OnInit {
  users: User[] = [];
  users$: Observable<User[]>;
  loggedUser$: Observable<User>;
  loggedUserFromLocalStorage: User;
  iterator: number = 0;
  constructor(
    private readonly userService: UserService,
    private readonly matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.loggedUser$ = this.userService.selectLoggedUser();
    this.loggedUserFromLocalStorage =
      this.userService.getLoggedUserFromLocalStorage();
    this.users$ = this.userService.getUsers();
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users);
    });
  }

  acceptUser = (matchId: number): void => {
    this.matchService.acceptUser(matchId);
    if (this.iterator + 1 < this.users.length) this.iterator++;
  };

  rejectUser = (matchId: number): void => {
    this.matchService.rejectUser(matchId);
    if (this.iterator + 1 < this.users.length) this.iterator++;
  };
}
