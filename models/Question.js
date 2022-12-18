export class Question {
  /**
   * 
   * @param {string} text text of the question
   * @param {*} options options to answer
   * @param {*} answer correct answer
   */
  constructor(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
  }

  /**
   * 
   * @param {string} option choosen option
   * @returns {boolean} true if option is the correct answer
   */
  checkAnswer(option) {
    return option.toLowerCase() === this.answer.toLowerCase();
  }
}