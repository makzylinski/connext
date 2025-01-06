import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
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
    },
    {
      icon: 'settings',
      title: 'App Settings',
    },
    {
      icon: 'logout',
      title: 'Logout',
    },
  ];
}
