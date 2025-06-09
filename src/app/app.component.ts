import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { User } from './models/user.model';
import { UserService } from './services/user.service';
import { ToastComponent } from './shared/toast/toast.component';
import { userFactory } from './utils/user.factory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent, ToastComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'connext';

  constructor(private readonly userService: UserService) {}
  ngOnInit() {
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : null;
    if (user) {
      const userData: User = userFactory(user);
      this.userService.dispatchUser(userData);
    }
  }
}
