import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Settings } from '../../models/settings.model';

@Component({
  selector: 'app-settings',
  imports: [MatCardModule, MatIconModule],
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

  redirectToSubpage = (url: string): void => {
    this.router.navigate(['settings', url]);
  };
}
