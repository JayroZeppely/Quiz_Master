import { TestBed } from '@angular/core/testing';
import { QuizResult } from './quiz-result';

describe('QuizResult', () => {
  let service: QuizResult;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizResult);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
