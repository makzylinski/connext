import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DateOfBirthComponent } from '../../components/date-of-birth/date-of-birth.component';
import { PhotoUploadComponent } from '../../components/photo-upload/photo-upload.component';
import { BioComponent } from '../../components/settings/bio/bio.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-steps-container',
  imports: [PhotoUploadComponent, BioComponent, DateOfBirthComponent],
  templateUrl: './steps-container.component.html',
  styleUrl: './steps-container.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsContainerComponent {
  @Input() steps: Array<{ step: number; name: string; header: string }>;
  @Input() currentStep: number;

  constructor(private readonly userService: UserService) {}

  onSelectedPhoto = (photoUrl: string): void =>
    this.userService.dispatchFirstLoginPhotoUrl(photoUrl);
}
