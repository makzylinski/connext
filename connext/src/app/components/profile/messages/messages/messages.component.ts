import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
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
  @Input() messages: any;
  @Input() pairs$: Observable<User[]>;
  messages1: any[] = [];
  content = '';
  recipientId: number = 1;
  senderId: number = 2;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.connect(this.senderId);
    this.chatService.messages$.subscribe((msg) => this.messages1.push(msg));
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
