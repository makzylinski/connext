import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PhotoUploadComponent } from '../../components/photo-upload/photo-upload.component';
import { StepsContainerComponent } from '../steps-container/steps-container.component';

@Component({
  selector: 'app-creation-user-modal',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    PhotoUploadComponent,
    StepsContainerComponent,
  ],

  templateUrl: './creation-user-modal.component.html',
  styleUrl: './creation-user-modal.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreationUserModalComponent implements OnInit {
  userForm: FormGroup;

  constructor(private readonly fb: FormBuilder) {}
  onSubmit = () => null;

  ngOnInit(): void {
    this.userForm = this.fb.group({
      bio: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
