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

  constructor(private readonly fb: FormBuilder) {}
  onSubmit = () => null;

  ngOnInit(): void {
    this.userForm = this.fb.group({
      bio: ['', Validators.required],
      password: ['', Validators.required],
    });

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
  }
}
