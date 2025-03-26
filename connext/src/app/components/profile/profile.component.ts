import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatchesThumbnailsComponent } from './matches-thumbnails/matches-thumbnails/matches-thumbnails.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatchesThumbnailsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
