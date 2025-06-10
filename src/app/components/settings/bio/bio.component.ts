import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SettingsService } from '../../../services/settings.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-bio',
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioComponent implements OnInit {
  bioValue: string;

  constructor(
    private readonly settingsService: SettingsService,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getFirstLoginBio().subscribe((bio: string) => {
      if (bio !== '') {
        this.bioValue = bio;
      }
    });
  }

  onSave = (): void => {
    this.userService.dispatchFirstLoginBio(this.bioValue);
    this.settingsService.saveBio(this.bioValue).subscribe();
  };
}
