import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat-service';
import { Message } from '../message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [ChatService]
})
export class MessagesComponent implements OnInit {

  messages: Message[];

  constructor(public _chatService: ChatService) { }

  getAllMessages(): void{
      this._chatService.getAllMessages()
      .subscribe(messages => this.messages = messages); 
  }
  ngOnInit() {
      this.getAllMessages();
  }

}
