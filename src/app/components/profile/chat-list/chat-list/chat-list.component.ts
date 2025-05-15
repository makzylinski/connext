import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  imports: [],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatListComponent {
  @Input() chats: any[];
}
