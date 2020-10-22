import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InfoMsgService {
  messages: [] = [];
  typeOf: string;

  add(message: string , typeOfMessage: string): void {
    // @ts-ignore
    this.messages.push( [ message , typeOfMessage ] );
  }

  clear(): void {
    this.messages = [];
  }
}
