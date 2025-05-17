import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-chat-list',
  imports: [CommonModule],
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatListComponent {
  @Input() pairs$: Observable<User[]>;
  profileClicked = output<User>();

  onProfileSelect = (profile: User) => this.profileClicked.emit(profile);
}
