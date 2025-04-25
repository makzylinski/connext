import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private socket: WebSocket;
  private messageSubject = new Subject<string>();
  public messages$ = this.messageSubject.asObservable();

  constructor() {
    this.socket = new WebSocket('ws://localhost:8080/ws');

    this.socket.onmessage = (event) => {
      this.messageSubject.next(event.data);
    };

    this.socket.onopen = () => console.log('[WebSocket] Connected');
    this.socket.onerror = (err) => console.error('[WebSocket] Error', err);
    this.socket.onclose = () => console.warn('[WebSocket] Closed');
  }

  sendMessage(msg: string) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(msg);
    } else {
      console.warn('[WebSocket] Connection not open');
    }
  }
}
