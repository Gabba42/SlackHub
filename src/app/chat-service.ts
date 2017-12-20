import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Message } from "../app/message";
import { AppService } from "./AppService";

@Injectable()
export class ChatService {

  private ourObservable: Observable<Message[]>;
  private messages: Message[] = [];
  private lastMessageId = 0;

  constructor(private _app: AppService) { }

  getAllMessages(): Observable<Message[]> {
    return this._app.getAllMessages();
  }

  getMessageById(messageId: number): Observable<Message> {
  return this._app.getMessageById(messageId);
  }

  addMessage(message: Message): Observable<Message> {
  return this._app.createMessage(message);
  }

  deleteMessageById(messageId: number): Observable<Message> {
   return this._app.deleteMessageById(messageId);
  }

  updateMessage(message: Message): Observable<Message> {
  return this._app.updateMessage(message);
  }

  private handleError(err: Response | any) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
