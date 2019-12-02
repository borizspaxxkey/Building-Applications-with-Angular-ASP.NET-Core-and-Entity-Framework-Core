import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//Component
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz.component';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions.component';
import { FinishedComponent } from './finished.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { QuizzesComponent } from './quizzes.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { PlayComponent } from './play.component';
import { PlayQuizComponent } from './playQuiz.component';

// Angular Material
import {
  MatButtonModule, MatInputModule, MatCardModule, MatListModule,
  MatToolbarModule, MatExpansionModule, MatRadioModule, MatDialogModule
} from '@angular/material';

// Services
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'login', component: LoginComponent },
  { path: 'play', component: PlayComponent },
  { path: 'playquiz/:quizId', component: PlayQuizComponent }
]

@NgModule({
  declarations: [
    AppComponent, QuestionComponent, QuestionsComponent,
    HomeComponent, NavComponent, QuizComponent, QuizzesComponent, RegisterComponent,
    LoginComponent, PlayComponent, PlayQuizComponent,FinishedComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    FormsModule, HttpClientModule, AppRoutingModule, RouterModule.forRoot(routes),

    // Angular Material
    MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule,
    MatExpansionModule, MatRadioModule,MatDialogModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents:[FinishedComponent]
})
export class AppModule { }
