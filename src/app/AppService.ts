import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from "rxjs/operators";
import 'rxjs/add/observable/throw';
import { Message } from "../app/message";

const APP_URL = "http://localhost:8080";

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  getAllMessages(): Observable<Message[]> {
    return this.http
      .get(APP_URL + '/messages')
      .pipe(map(response => {
        const messages = response.json();
        return messages.map((message) => new Message(message));
      }))
      .pipe(catchError(this.handleError));
  }

  public createMessage(message: Message): Observable<Message> {
    return this.http
      .post(APP_URL + '/messages', message)
      .pipe(map(response => {
        return new Message(response.json());
      }))
      .pipe(catchError(this.handleError));
  }

  public getMessageById(messageId: number): Observable<Message> {
    return this.http
      .get(APP_URL + '/message/' + messageId)
      .pipe(map(response => {
        return new Message(response.json());
      }))
      .pipe(catchError(this.handleError));
  }

  public updateMessage(message: Message): Observable<Message> {
    return this.http
      .put(APP_URL + '/messages/' + message.messageId, message)
      .pipe(map(response => {
        return new Message(response.json());
      }))
      .pipe(catchError(this.handleError));
  }

  public deleteMessageById(messageId: number): Observable<null> {
    return this.http
      .delete(APP_URL + '/messages/' + messageId)
      .pipe(map(response => null))
      .pipe(catchError(this.handleError));
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
