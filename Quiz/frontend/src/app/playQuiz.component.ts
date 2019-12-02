import { Component, OnInit } from '@angular/core'
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FinishedComponent } from './finished.component';

@Component({
  templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent implements OnInit {

  quizId;
  questions;
  step = 0;

  constructor(private api: ApiService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.getQuestions(this.quizId).subscribe(response => {
      this.questions = response;

      this.questions.forEach(q => {
        q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3]
        shuffle(q.answers);
      });
    });
  }

  finish() {
    let correct = 0;
    this.questions.forEach(q => {
      if (q.correctAnswer === q.selectedAnswer) {
        correct++;
      }

    });
    const dialogRef = this.dialog.open(FinishedComponent, {
      data: { correct, total: this.questions.length }
    });
    console.log(correct);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

// Shuffles array in place. ES6 version
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
