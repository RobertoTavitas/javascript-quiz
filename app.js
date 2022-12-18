import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 * 
 * @param {Quiz} quiz main Quiz object
 * @param {UI} ui UI object
 */
const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().text);
    ui.showOptions(quiz.getQuestionIndex().options, option => {
      quiz.guess(option);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.index + 1, quiz.questions.length);
  }
}

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();
  renderPage(quiz, ui);
}
main()