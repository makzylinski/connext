import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatTooltipModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  isLoggedIn: boolean = this.authService.isLoggedIn();

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  openSettings = () => {
    this.router.navigate(['settings']);
  };

  navigateToProfile = () => this.router.navigate(['/profile']);

  navigateToHomePage = () => this.router.navigate(['/']);

  logout = () => {
    this.authService.logOut();
    this.router.navigate(['log-in']);
  };
}
