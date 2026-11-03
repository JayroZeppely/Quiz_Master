import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-quiz-question',
  styleUrl: './quiz-question.css',
  templateUrl: './quiz-question.html',
})
export class QuizQuestion {
  @Input() id: number = 0;
  @Input() question: string = 'What is the capital of France?';
  @Input() options: string[] = ['Paris', 'London', 'Berlin', 'Madrid'];
  @Input() answer: number = 0;
  @Input() isNextDisabled: boolean = true;
  @Input() isLastQuestion: boolean = false;

  selectedOption: number | null = null;

  @Output() nextQuestion = new EventEmitter<void>();
  @Output() answerSelected = new EventEmitter<{ questionId: number; selectedOption: number }>();
  @Output() finishQuizEvent = new EventEmitter<void>();


  goToNextQuestion(): void {
    if (this.isNextDisabled) {
      return;
    }
    this.isNextDisabled = true;
    this.nextQuestion.emit();
  }

  selectOption(questionId: number, selectedOption: number): void {
    this.selectedOption = selectedOption;
    this.isNextDisabled = false;
    this.answerSelected.emit({ questionId, selectedOption });
  }

  finishQuizInput(): void {
    this.finishQuizEvent.emit();
  }
}