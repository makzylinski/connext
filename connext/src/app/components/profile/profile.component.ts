import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatListComponent } from './chat-list/chat-list/chat-list.component';
import { MatchesThumbnailsComponent } from './matches-thumbnails/matches-thumbnails/matches-thumbnails.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatchesThumbnailsComponent, ChatListComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {}
