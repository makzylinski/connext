import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../../models/message.interface';
import { User } from '../../models/user.model';
import { MatchService } from '../../services/match.service';
import { MessageService } from '../../services/message.service';
import { ChatListComponent } from './chat-list/chat-list/chat-list.component';
import { MatchesThumbnailsComponent } from './matches-thumbnails/matches-thumbnails/matches-thumbnails.component';
import { MessagesComponent } from './messages/messages/messages.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatchesThumbnailsComponent, ChatListComponent, MessagesComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  messages: Message[];
  chats: any[];
  pairs$: Observable<User[]>;
  selectedProfile: User;

  constructor(
    private readonly messageService: MessageService,
    private readonly matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.chats = this.messageService.getChatProfiles();
    this.pairs$ = this.matchService.getPairs();
    this.matchService.getPairs().subscribe((pairs) => {
      console.log('Pairs:', pairs);
    });
  }

  onSelectedProfile = (profile: User) => (this.selectedProfile = profile);
}
