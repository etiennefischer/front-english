import {Component, Input, OnInit} from '@angular/core';
import {ExerciceService} from './exercice';
import { CHAPTER } from '../../../myFakeAPI';
import { InfoMsgService} from '../../_shared/info-msg/info-msg.service';
import {delay} from 'rxjs/operators';
import {LevelAssessService} from '../level-assess/level-assess.service';


interface Answer {
  msg: InfoMsgService;
}

@Component({
  selector: 'app-exercices',
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.css']
})
export class ExercicesComponent implements OnInit {
  exercices = CHAPTER;
  currentExercice: number;
  selectedReponse: string;
  correctionText: string;
  structure: any[];

  constructor(private msg: InfoMsgService, private score: LevelAssessService) {
    this.currentExercice = 0;

  }

  ngOnInit(): void {
    this.score.setBegin();

  }

  onSelect(reponse: string): void {

    this.selectedReponse = reponse;
    this.checkAnswer();
    this.isExerciceDone();
    this.structure = this.breadcrumbsArray(this.currentExercice);

  }
  checkAnswer(): boolean {
    this.isExerciceDone();
    if (this.selectedReponse === this.exercices[this.currentExercice].answer){

      this.msg.clear();
      this.msg.add("Bonne réponse !", "0");
      this.score.onGoodAnswer(this.exercices[this.currentExercice].score);
      this.currentExercice += 1;


      this.resetCorrectionMsg();
      return true;
    }else {
      this.msg.clear();
      this.msg.add("Mauvaise réponse !", "1");
      this.addCorrectionText();
      this.score.onWrongAnswer(this.exercices[this.currentExercice].score);
      return false;
    }
  }

  isExerciceDone(): any {
    console.log(this.currentExercice);
    console.log(this.exercices.length);
    if (this.exercices.length   === this.currentExercice) {
      console.log("Exercice done !");
      this.currentExercice = 0;
      this.score.onExerciceEnd(this.score.score, this.exercices.length);
    }
  }
  breadcrumbsArray(length: number): any[] {
    const array = [];
    for (let i = 0; i < length; i++){
      array.push(i);
    }
    return array;
  }
  addCorrectionText(): any {
    this.correctionText = this.exercices[this.currentExercice].correction;

  }
  resetCorrectionMsg(): void {
    this.correctionText = '';
  }

}
