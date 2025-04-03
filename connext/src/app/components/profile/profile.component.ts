import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Message } from '../../models/message.interface';
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

  constructor(private readonly messageService: MessageService) {}

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }
}
