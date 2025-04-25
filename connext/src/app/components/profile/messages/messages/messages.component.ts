import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
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
export class MessagesComponent implements OnInit {
  @Input() messages: any;
  @Input() pairs$: Observable<User[]>;
  content = '';
  messages1: any = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.messages$.subscribe((msg) => this.messages1.push(msg));
  }

  send() {
    if (this.content.trim()) {
      this.chatService.sendMessage(this.content);
      this.content = '';
    }
  }
}
