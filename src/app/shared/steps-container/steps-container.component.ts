import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DateOfBirthComponent } from '../../components/date-of-birth/date-of-birth.component';
import { PhotoUploadComponent } from '../../components/photo-upload/photo-upload.component';
import { BioComponent } from '../../components/settings/bio/bio.component';

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

  // currentStep:
}
