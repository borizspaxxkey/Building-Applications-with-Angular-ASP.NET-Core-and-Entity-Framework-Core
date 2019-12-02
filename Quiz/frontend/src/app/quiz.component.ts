import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent {

  quiz = {};

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.api.quizSelected.subscribe(quiz => {
      this.quiz = quiz;
    })
  }

  post(quiz) {
    this.api.postQuiz(quiz);
  }
}
