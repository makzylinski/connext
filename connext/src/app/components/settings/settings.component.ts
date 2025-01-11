import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Settings } from '../../models/settings.model';
import { FileUploadService } from '../../services/file-upload.service';
import { PhotoUploadComponent } from '../photo-upload/photo-upload.component';

@Component({
  selector: 'app-settings',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    RouterOutlet,
    PhotoUploadComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  imgSrc$?: Observable<string>;

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

  constructor(
    private readonly router: Router,
    private readonly fileUploadService: FileUploadService
  ) {}

  redirectToSubpage = (url: string): void => {
    this.router.navigate(['settings', url]);
  };

  fetchImage = () =>
    (this.imgSrc$ = this.fileUploadService.fetchProfileImage());
}
