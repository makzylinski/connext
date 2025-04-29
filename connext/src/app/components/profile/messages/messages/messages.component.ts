import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../../models/user.model';
import { ChatService } from '../../../../services/chat.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-messages',
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent implements OnInit, OnChanges {
  @Input() pairs$: Observable<User[]>;
  @Input() selectedProfile: User;

  messages$ = new BehaviorSubject<any[]>([]); // TODO - change to Message[]
  content = '';
  recipientId: number;
  senderId: number;

  constructor(
    private readonly chatService: ChatService,
    private readonly userService: UserService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedProfile'] && this.selectedProfile) {
      this.recipientId = this.selectedProfile.id;

      this.chatService
        .getMessagesWithUser(this.recipientId)
        .subscribe((messages) => {
          this.messages$.next(messages);
        });
    }
  }

  ngOnInit() {
    this.userService.getUserId().subscribe((userId) => {
      this.senderId = userId;
      this.chatService.connect(this.senderId);
    });

    this.chatService.messages$.subscribe((msg) => {
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
