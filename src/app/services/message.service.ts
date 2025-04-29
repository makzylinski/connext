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

  chatProfiles: any[] = [
    {
      id: 1,
      image:
        'https://www.man-shop.eu/thumbnail/db/93/05/1726129673/MAN%20Lifestyle%20Merchandising%20Shop%20Bekleidung%20Herren_800x800.png',
      name: 'John Doe',
      lastMessage: 'Hello',
    },
    {
      id: 2,
      image:
        'https://as2.ftcdn.net/v2/jpg/02/95/69/87/1000_F_295698768_8NS9qp5sJmOMCEQDbcpGTZd7DttKnAql.jpg',
      name: 'Jane Doe',
      lastMessage: 'Hi',
    },
  ];

  getMessages = () => {
    return this.messages;
  };

  getChatProfiles = () => {
    return this.chatProfiles;
  };
}
