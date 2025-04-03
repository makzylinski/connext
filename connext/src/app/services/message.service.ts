import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = []; // this will most likely be an Observable array of messages

  getMessages = () => {
    return this.messages;
  };
}
