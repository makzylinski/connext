import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-bio',
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioComponent {
  bioValue: string;

  constructor(private readonly settingsService: SettingsService) {}

  onSave = () => this.settingsService.saveBio(this.bioValue).subscribe();
}
