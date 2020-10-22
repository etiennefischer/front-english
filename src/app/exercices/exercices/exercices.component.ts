import {Component, Input, OnInit} from '@angular/core';
import {ExerciceService} from './exercice';
import { CHAPTER } from './../../../mock-chapter';
import { InfoMsgService} from '../../_shared/info-msg/info-msg.service';

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
  msg = InfoMsgService;
  currentExercice: number;
  selectedReponse: string;
  structure: any[];
  constructor() {
    this.currentExercice = 0;


  }

  ngOnInit(): void {
    console.log(this.structure);
    console.log(this.currentExercice);
  }

  onSelect(reponse: string): void {
    this.selectedReponse = reponse;
    this.checkAnswer();
    this.isExerciceDone();
    this.structure = this.breadcrumbsArray(this.currentExercice);
    console.log(this.structure);
    console.log(this.currentExercice);
    console.log(1);


  }
  checkAnswer(): boolean {

    if (this.selectedReponse === this.exercices[this.currentExercice].answer){
      console.log('Bonne réponse');
      this.currentExercice += 1;



    }

    return true;
  }
  // tslint:disable-next-line:typedef
  isExerciceDone() {
    if (this.exercices.length <= this.currentExercice) {
      console.log('Exercice terminé !');
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
}
