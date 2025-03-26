import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-matches-thumbnails',
  imports: [],
  templateUrl: './matches-thumbnails.component.html',
  styleUrl: './matches-thumbnails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MatchesThumbnailsComponent {
  constructor(private readonly userService: UserService) {}

  testProfiles = this.userService.testProfiles;
}
