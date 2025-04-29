import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-matches-thumbnails',
  imports: [CommonModule],
  templateUrl: './matches-thumbnails.component.html',
  styleUrl: './matches-thumbnails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MatchesThumbnailsComponent {
  profileClicked = output<User>();
  @Input() pairs$: Observable<User[]>;

  onProfileSelect = (profile: User) => this.profileClicked.emit(profile);
}
