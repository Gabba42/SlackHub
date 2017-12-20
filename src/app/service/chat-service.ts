import { Injectable } from '@angular/core';
import { Message } from '../model/message';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ChatService {
  private uri = 'http://localhost:8080/chat/messages/';

  constructor(private http: Http) { }

  getMessages(): Observable<any> {
    return this.http.get(this.uri).map((response: Response) => response.json());
  }
  getMessageById(id:number): Observable<any> {
    return this.http.get(this.uri + "/id").map((response: Response) => response.json());
  }

  addMessage(input: string) {
    let newMessage: Message = new Message(input);
    console.log("addMessage from ChatService");
    this.http.post(this.uri, newMessage).subscribe((response: Response) => response);
  }

  deleteMessage(messageID: number) {
    this.http.delete(this.uri + messageID).subscribe();
    console.log(this.uri + messageID);
  }

  updateMessage(messageID: number, newMessage: string) {
    this.http.put(this.uri+messageID, newMessage).subscribe();
  }
}
