import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Message } from '../../../../models/message.interface';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-messages',
  imports: [CommonModule, MatIconModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesComponent {
  @Input() messages: Message[];
  @Input() pairs$: Observable<User[]>;
}
