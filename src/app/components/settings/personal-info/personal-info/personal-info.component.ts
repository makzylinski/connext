import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PersonalInfoService } from '../../../../services/personal-info.service';

@Component({
  selector: 'app-personal-info',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalInfoComponent implements OnInit {
  personalInfoForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly personalInfoService: PersonalInfoService
  ) {}

  ngOnInit(): void {
    this.personalInfoForm = this.fb.group({
      email: [''],
      dateOfBirth: [''],
    });
  }

  onSubmit = () => {
    if (this.personalInfoForm.get('email')?.value) {
      this.personalInfoService.putEmailChange(
        this.personalInfoForm.get('email')?.value
      );
    }
    if (this.personalInfoForm.get('dateOfBirth')?.value) {
      this.personalInfoService.putDateOfBirthChange(
        this.personalInfoForm.get('dateOfBirth')?.value
      );
    }

    console.log(this.personalInfoForm.value);
  };
}
