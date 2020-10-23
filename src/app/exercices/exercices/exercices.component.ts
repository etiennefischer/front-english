import {Component, Input, OnInit} from '@angular/core';
import {ExerciceService} from './exercice';
import { CHAPTER } from './../../../mock-chapter';
import { InfoMsgService} from '../../_shared/info-msg/info-msg.service';
import {delay} from 'rxjs/operators';

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

  constructor(private msg: InfoMsgService) {
    this.currentExercice = 0;

  }

  ngOnInit(): void {

  }

  onSelect(reponse: string): void {
    this.selectedReponse = reponse;
    this.checkAnswer();
    this.isExerciceDone();
    this.structure = this.breadcrumbsArray(this.currentExercice);

  }
  checkAnswer(): boolean {

    if (this.selectedReponse === this.exercices[this.currentExercice].answer){
      this.currentExercice += 1;
      this.msg.clear();
      this.msg.add("Bonne réponse !", "0");
      this.resetCorrectionMsg();
      return true;
    }else {
      this.msg.clear();
      this.msg.add("Mauvaise réponse !", "1");
      this.addCorrectionText();
      return false;
    }
  }

  isExerciceDone(): any {
    if (this.exercices.length <= this.currentExercice) {
      this.currentExercice = 0;
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
