import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../../models/user.model';
import { ChatService } from '../../../../services/chat.service';

@Component({
  selector: 'app-messages',
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  @Input() pairs$: Observable<User[]>;
  messages$ = new BehaviorSubject<any[]>([]); // TODO - change to Message[]
  content = '';
  recipientId: number = 1;
  senderId: number = 10;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.connect(10);
    this.chatService
      .getMessagesWithUser(this.recipientId)
      .subscribe((messages) => {
        this.messages$.next(messages);
        console.log('Messages:', messages);
      });

    this.chatService.messages$.subscribe((msg) => {
      console.log('Received message:', msg);
      const newMsg = {
        ...msg,
        id: Date.now() + Math.random(),
      };

      this.messages$.next([...this.messages$.getValue(), newMsg]);
    });
  }

  send() {
    if (this.content.trim() && this.recipientId) {
      this.chatService.sendMessage(
        this.senderId,
        this.recipientId,
        this.content
      );
      this.content = '';
    }
  }
}
