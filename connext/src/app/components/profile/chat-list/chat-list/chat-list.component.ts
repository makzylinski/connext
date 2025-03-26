import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-chat-list',
  imports: [],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatListComponent {
  constructor(private readonly userService: UserService) {}

  testChats = this.userService.testProfiles;
}
