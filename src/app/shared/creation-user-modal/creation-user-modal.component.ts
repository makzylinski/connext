import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { FileUploadService } from '../../services/file-upload.service';
import { StepsContainerComponent } from '../steps-container/steps-container.component';

@Component({
  selector: 'app-creation-user-modal',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    StepsContainerComponent,
  ],

  templateUrl: './creation-user-modal.component.html',
  styleUrl: './creation-user-modal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreationUserModalComponent implements OnInit {
  userForm: FormGroup;
  stepsConfig: Array<{ step: number; name: string; header: string }>;
  currentStep: number = 0;
  isPhotoStepValidated$: Observable<boolean>;

  constructor(private readonly fileUploadService: FileUploadService) {}

  onSubmit = () => null;

  ngOnInit(): void {
    this.stepsConfig = [
      {
        step: 0,
        name: 'bio',
        header: 'Input your bio',
      },
      {
        step: 1,
        name: 'profile picture',
        header: 'Input your picture',
      },
      {
        step: 2,
        name: 'date of birth',
        header: 'Input your date of birth',
      },
    ];

    this.isPhotoStepValidated$ = this.fileUploadService.photoValidation;
  }

  onNextStepClick = () => {
    if (this.currentStep < this.stepsConfig.length - 1) {
      this.currentStep++;
    }
  };

  onPrevStepClick = () => {
    if (this.currentStep !== 0) {
      this.currentStep--;
    }
  };
}
