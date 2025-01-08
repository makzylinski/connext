import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-swipe',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  standalone: true,
  templateUrl: './main-swipe.component.html',
  styleUrl: './main-swipe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSwipeComponent implements OnInit {
  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((profiles) => {
      console.log(profiles);
    });
  }
}
