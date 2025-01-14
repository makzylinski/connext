import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { Settings } from '../../models/settings.model';

@Component({
  selector: 'app-settings',
  imports: [CommonModule, MatCardModule, MatIconModule, RouterOutlet],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  settings: Settings[] = [
    {
      icon: 'person',
      title: 'Account Settings',
      url: 'account-settings',
    },
    {
      icon: 'settings',
      title: 'App Settings',
      url: 'app-settings',
    },
    {
      icon: 'logout',
      title: 'Logout',
      url: 'logout',
    },
  ];

  constructor(private readonly router: Router) {}

  navigateTo = (url: string): void => {
    this.router.navigate(['settings', url]);
  };
}
