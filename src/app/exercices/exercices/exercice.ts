export interface ExerciceService {
  id: number;
  subject: string;
  question1: string;
  options: [ string , string , string ];
  answer: string;
  correction: string;

  // Bq1: string;
  // Br1: string;
  // Br2: string;
  // Br3: string;
  // Banswer: string;
  //
  // Cq1: string;
  // Cr1: string;
  // Cr2: string;
  // Cr3: string;
  // Canswer: string;
}

