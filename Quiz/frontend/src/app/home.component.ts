import { Component } from '@angular/core'
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';


@Component({
  template: `
      <quiz></quiz>
      <quizzes></quizzes>
  `
})
export class HomeComponent {

  constructor() {}

}
