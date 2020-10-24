import { Injectable } from '@angular/core';
import {timeout} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InfoMsgService {
  messages: [] = [];
  typeOf: string;

  add(message: string , typeOfMessage: string): void {
    // @ts-ignore
    this.messages.push( [ message , typeOfMessage ] );
    // setTimeout(() => this.clear(), 5000);
  }

  clear(): void {
    this.messages = [];
  }
}
