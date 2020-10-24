import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelAssessService {
  level: string;
  score: number;
  todayScore: number;
  constructor() {
  }
  setBegin(): any {
    this.score = 0;
    this.todayScore = 0;
    this.level = "A0";
  }
  onGoodAnswer(score): any{
    this.score += score;
  }
  onWrongAnswer(score): any{
    this.score = this.score - (score * 0.75);
  }
  onExerciceEnd( score , numberOfQuestion ): any {
    this.todayScore = this.todayScore + (score / numberOfQuestion)/10;
    // if (this.todayScore > 4){
    //   this.todayScore = 4;
    // }
    this.score = 0;
  }
}
