import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-matches-thumbnails',
  imports: [],
  templateUrl: './matches-thumbnails.component.html',
  styleUrl: './matches-thumbnails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MatchesThumbnailsComponent {}
