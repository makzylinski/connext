import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environment';
import { Message } from '../models/message.interface';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private socket: WebSocket | null = null;
  private messageSubject = new Subject<any>();
  public messages$ = this.messageSubject.asObservable();

  private senderId: number;
  private readonly baseUrl = environment.baseUrl + '/api/messages';

  constructor(private readonly http: HttpClient) {}

  connect(senderId: number) {
    this.senderId = senderId;
    this.socket = new WebSocket(
      'ws://localhost:8080/ws?user=' + encodeURIComponent(this.senderId)
    );

    this.socket.onopen = () =>
      console.log('[WebSocket] Połączono jako', this.senderId);
    this.socket.onerror = (error) => console.error('[WebSocket] Błąd:', error);
    this.socket.onclose = () => console.warn('[WebSocket] Rozłączono');
    this.socket.onmessage = (event) => {
      this.messageSubject.next(JSON.parse(event.data));
    };
  }

  sendMessage(senderId: number, recipientId: number, content: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ senderId, recipientId, content }));
      console.log(JSON.stringify({ senderId, recipientId, content }));
    }
  }

  getMessagesWithUser = (userId: number) =>
    this.http.get<Message[]>(`${this.baseUrl}/${userId}`);
}
