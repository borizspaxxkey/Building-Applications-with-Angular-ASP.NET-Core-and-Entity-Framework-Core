import { Component } from '@angular/core'
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'play',
  templateUrl: './play.component.html'
})
export class PlayComponent {

  quizzes;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.api.getAllQuizzes().subscribe(response => {
      this.quizzes = response;
    }, error => {
      console.log(error);
    })
  }
}
