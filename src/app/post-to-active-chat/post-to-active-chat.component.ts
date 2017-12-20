import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../service/chat-service';
import { Message } from '../model/message';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-post-to-active-chat',
  templateUrl: './post-to-active-chat.component.html',
  styleUrls: ['./post-to-active-chat.component.css'],
})
export class PostToActiveChatComponent {

  constructor(private _chatService: ChatService) { }

  onClick(input: any): void {
    this._chatService.addMessage(input.value);
    input.value = ""; 
  }
}
