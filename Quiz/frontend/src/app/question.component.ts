import { Component } from '@angular/core'
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {

  question: any = {};
  quizId

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.api.questionSelected.subscribe(question => {
      this.question = question;
    });
  }

  post(question) {
    question.quizId = this.quizId;
    this.api.postQuestion(question);
  }
}
