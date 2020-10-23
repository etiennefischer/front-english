import { Component, OnInit } from '@angular/core';
import {InfoMsgService} from './info-msg.service';

@Component({
  selector: 'app-info-msg',
  templateUrl: './info-msg.component.html',
  styleUrls: ['./info-msg.component.css']
})
export class InfoMsgComponent implements OnInit {

  constructor(public infoMsg: InfoMsgService) { }

  ngOnInit(): void {


  }

}
