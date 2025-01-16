import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../../services/file-upload.service';
import { PhotoUploadComponent } from '../../photo-upload/photo-upload.component';
import { BioComponent } from '../bio/bio.component';

@Component({
  selector: 'app-account-settings',
  imports: [PhotoUploadComponent, BioComponent, CommonModule, MatCardModule],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSettingsComponent {
  imgSrc$?: Observable<string>;
  constructor(private readonly fileUploadService: FileUploadService) {}

  fetchImage = () =>
    (this.imgSrc$ = this.fileUploadService.fetchProfileImage());
}
