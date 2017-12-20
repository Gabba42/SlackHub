import { TestBed, async, inject } from '@angular/core/testing';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ChatService } from './chat-service';
import { Message } from '../model/message';
import { MockMessages } from './chat-service-mockdata';
import set = Reflect.set;

//set up mock environment
describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChatService,
        MockBackend,
        BaseRequestOptions,
        { //setting up Http object (??)
          provide: Http, //provider
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions], //dependencies
        },
      ]
    });
  });

  //this works
  it('should create a service', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));

  //this works
  it('should return messages', inject([ChatService, MockBackend], (service: ChatService, backend: MockBackend) => {
    let response = new ResponseOptions ({
      body: JSON.stringify(MockMessages) //converting a mock message to a string
    });

    const baseResponse = new Response(response);

    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(baseResponse)
    );

    return service.getMessages().subscribe(data => {
      expect(data).toEqual(MockMessages);
    });
  }));
  //
  // it('should get single message by id'), inject([ChatService, MockBackend], (service: ChatService, backend: MockBackend) => {
  //   let message: Message = {
  //      "messageID": 1,
  //      "message": "abrar",
  //      "timestamp": "Wed Dec 20 10:24:31 EST 2017",
  //      "userId": 1
  //  }

  //does not work yet 
   it('should return messages', inject([ChatService, MockBackend], (service: ChatService, backend: MockBackend) => {
     let response = new ResponseOptions ({
       body: JSON.stringify(message) //converting a mock message to a string
     });

     const baseResponse = new Response(response);

     backend.connections.subscribe(
       (c: MockConnection) => c.mockRespond(baseResponse)
     );

     return service.getMessageById(1).subscribe(data => {
       expect(data).toEqual(message);
     });
  })

  //another test method starts here

  // it('get populated array of messages', inject([ChatService], (service: ChatService) => {
  //   const message1 = new Message('Hi MOM');
  //   const message2 = new Message('Hi DAD');
  //   service.addMessage(message1);
  //   service.addMessage(message2);
  //   expect(service.getMessages()).toEqual([message1, message2]);
  // }));
  // it('get message by id', inject([ChatService], (service: ChatService) => {
  //   const message = new Message('Hi SIS');
  //   service.addMessage(message);
  //   expect(service.getMessageById(1)).toBe(message);
  // }));
  // it('delete message by id', inject([ChatService], (service: ChatService) => {
  //   const message1 = new Message('Hi BRO');
  //   const message2 = new Message('WAT UP CUZ!');
  //   service.addMessage(message1);
  //   service.addMessage(message2);
  //   service.deleteMessageById(1);
  //   service.deleteMessageById(2);
  //   expect(service.getMessages()).toEqual([]);
  // }));
  // it('edit message by id', inject([ChatService], (service: ChatService) => {
  //   const message = new Message('Hi Doggez');
  //   service.addMessage(message);
  //   const editedMessage = new Message('Hi Doggie');
  //   const newMessage = service.editMessageById(1, editedMessage);
  //   expect(newMessage.messageBody).toEqual('Hi Doggie');
  // }));
});
