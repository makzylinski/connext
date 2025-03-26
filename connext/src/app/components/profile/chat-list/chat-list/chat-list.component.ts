import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  imports: [],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatListComponent {
  testChats = [
    {
      image: '',
      name: 'Joe Doe',
      lastMessage: 'Hey, how are you?',
    },
  ];
}
