import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizResult } from '../../quiz-result';

@Component({
  imports: [],
  selector: 'app-score',
  styleUrl: './score.css',
  templateUrl: './score.html',
})
export class Score {

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly quizResult = inject(QuizResult);

  score: number = 0;
  total: number = 0;
  answers: String[] = [];

  ngOnInit(): void {
      this.score = this.quizResult.score();
      this.total = this.quizResult.total();
      this.answers = this.activatedRoute.snapshot.queryParamMap.get('answers') ? JSON.parse(this.activatedRoute.snapshot.queryParamMap.get('answers') ?? '[]') : [];
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
