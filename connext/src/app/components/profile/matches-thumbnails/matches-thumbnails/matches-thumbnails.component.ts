import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-matches-thumbnails',
  imports: [],
  templateUrl: './matches-thumbnails.component.html',
  styleUrl: './matches-thumbnails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MatchesThumbnailsComponent {
  @Input() matches: any[];
}
