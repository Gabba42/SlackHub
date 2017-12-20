import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ChatService } from "../chat-service";

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css'],
})
export class PostToActiveChatComponent implements OnInit {

  constructor(private _chatService: ChatService) { }

  newMessage: Message = new Message();

  addMessage() {
    this._chatService.addMessage(this.newMessage);
    this.newMessage = new Message();
  }

  ngOnInit() {
  }

}
