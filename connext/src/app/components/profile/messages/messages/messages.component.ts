import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Message } from '../../../../models/message.interface';

@Component({
  selector: 'app-messages',
  imports: [CommonModule, MatIconModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  messages: Message[] = [
    {
      id: 1,
      message: 'Hello, how are you?',
      sender: 'John Doe',
      date: '2021-01-01',
      fromMe: true,
    },
    {
      id: 2,
      message: 'I am fine, thank you!',
      sender: 'Jane Doe',
      date: '2021-01-02',
      fromMe: false,
    },
  ];
}
