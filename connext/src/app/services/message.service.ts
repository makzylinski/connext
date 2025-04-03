import { Injectable } from '@angular/core';
import { Message } from '../models/message.interface';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: Message[] = [
    {
      id: 1,
      message: 'Hello, how are you?',
      sender: 'John Doe',
      date: '2021-01-01',
      fromMe: true,
    },
    {
      id: 2,
      message: 'I am fine, thank you!',
      sender: 'Jane Doe',
      date: '2021-01-02',
      fromMe: false,
    },
  ]; // this will most likely be an Observable array of messages

  getMessages = () => {
    return this.messages;
  };
}
