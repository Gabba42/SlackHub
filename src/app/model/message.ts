export class Message {
  message:string
  messageID: number;
  userId:number;
  timestamp:string;

  constructor(message: string) {
    this.message = message;
    this.messageID = new Date().getTime();
    this.timestamp = new Date().toString(); 
  }
}
