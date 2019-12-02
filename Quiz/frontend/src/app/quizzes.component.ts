import { Component } from '@angular/core'
import { ApiService } from './api.service';

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent {

  quizzes: any;
  quiz = {}

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.api.getQuizzes().subscribe(response => {
      this.quizzes = response;
    }, error => {
      console.log(error);
    })
  }
}
