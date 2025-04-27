import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private socket: WebSocket | null = null;
  private messageSubject = new Subject<any>();
  public messages$ = this.messageSubject.asObservable();

  private username: string = '';

  constructor() {}

  connect(username: string) {
    this.username = username;
    this.socket = new WebSocket(
      'ws://localhost:8080/ws?user=' + encodeURIComponent(this.username)
    );

    this.socket.onopen = () =>
      console.log('[WebSocket] Połączono jako', this.username);
    this.socket.onerror = (error) => console.error('[WebSocket] Błąd:', error);
    this.socket.onclose = () => console.warn('[WebSocket] Rozłączono');
    this.socket.onmessage = (event) => {
      this.messageSubject.next(JSON.parse(event.data));
    };
  }

  sendMessage(senderId: string, recipientId: string, content: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ senderId, recipientId, content }));
      console.log(JSON.stringify({ senderId, recipientId, content }));
    }
  }
}
