import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-date-of-birth',
  providers: [provideNativeDateAdapter()],
  templateUrl: './date-of-birth.component.html',
  styleUrl: './date-of-birth.component.scss',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateOfBirthComponent {
  selectedDate = new Date();

  constructor(private readonly userService: UserService) {}

  filterPastDates = (date: Date | null): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date !== null && date < today;
  };

  onDateChange = (date: MatDatepickerInputEvent<Date>) => {
    const value = date.value;

    if (value) {
      const newDate = new Date(value);
      this.userService.dispatchFirstLoginDateOfBirth(newDate);
    }
  };
}
