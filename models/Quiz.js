// @ts-check
import { Question } from "./Question.js";

export class Quiz {
  index = 0;
  score = 0;

  /**
   * 
   * @param {Question[]} questions array of Question object
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   * 
   * @returns {Question}
   */
  getQuestionIndex() {
    return this.questions[this.index];
  }

  /**
   * 
   * @returns {boolean} true if quiz ended
   */
  isEnded() {
    return this.questions.length === this.index;
  }

  /**
   * 
   * @param {string} answer 
   */
  guess(answer) {
    if (this.getQuestionIndex().checkAnswer(answer)) this.score++;
    this.index++;
  }
}