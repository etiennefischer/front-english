import { Component, OnInit } from '@angular/core';
import { LevelAssessService} from './level-assess.service';

@Component({
  selector: 'app-level-assess',
  templateUrl: './level-assess.component.html',
  styleUrls: ['./level-assess.component.css']
})
export class LevelAssessComponent implements OnInit {

  constructor(public levelService: LevelAssessService) {

  }

  ngOnInit(): void {
  }

}
