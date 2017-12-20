import { Component, OnInit } from '@angular/core';
import { Message } from "./message";
import { ChatService } from "./chat-service";
import { AppService } from "./AppService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService, ChatService]
})
export class AppComponent { //implements OnInit
  title = 'Slack Hub';

  // public messages: Message[]= [];
  //
  // constructor(private _chatService: ChatService){ }
  //
  // public ngOnInit() {
  //   this._chatService.getAllMessages()
  //   .subscribe((messages) => {this.messages = messages});
  // }
}
