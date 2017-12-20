import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ChatService } from "../chat-service";

@Component({
  selector: 'app-active-chat',
  templateUrl: './active-chat.component.html',
  styleUrls: ['./active-chat.component.css']
})
export class ActiveChatComponent { //implements OnInit

  public windowTitle = 'Active Chat Window';
  public messages: Message[]= [];

  // constructor(private _chatService: ChatService) { }

  // getMessages(): void {
  //   this._chatService.getAllMessages()
  //           .subscribe(messages => this.messages = messages);
  // }
  // ngOnInit(): void {
  //   this.getMessages();
  // }

}
