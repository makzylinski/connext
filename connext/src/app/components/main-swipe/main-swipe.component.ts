import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
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
  users$: Observable<User[]>;
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
