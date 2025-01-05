import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
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
})
export class ToolbarComponent {
  isLoggedIn: boolean = this.authService.isLoggedIn();

  constructor(private readonly authService: AuthService) {}
}
