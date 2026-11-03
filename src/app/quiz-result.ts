import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class QuizResult {
    score = signal(0);
    total = signal(0);

    setScore(score: number): void {
        this.score.set(score);
    }

    setTotal(total: number): void {
        this.total.set(total);
    }
}
