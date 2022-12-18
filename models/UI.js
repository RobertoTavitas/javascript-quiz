export class UI {
  constructor() {}

  /**
   * 
   * @param {string} text question to render
   */
  showQuestion(text) {
    const title = document.querySelector('.question');
    title.innerText = text;
  }

  /**
   * 
   * @param {string[]} options question options
   * @param {function} callback callback function
   */
  showOptions(options, callback) {
    const optionsContainer = document.querySelector('.options-container');
    optionsContainer.innerHTML = '';

    for (let option of options) {
      const btn = document.createElement('button');
      btn.className = 'option';
      btn.innerText = option;
      btn.addEventListener('click', () => callback(option));

      optionsContainer.appendChild(btn);
    }
  }

  /**
   * 
   * @param {number} score score
   */
  showScores(score) {
    const quiz = document.querySelector('.quiz');
    quiz.innerHTML = `
      <h1>Results</h1>
      <h2>Your Score: ${score}</h2>
      <a style="margin: 5px" class="option" href="index.html">Try again</a>
    `;
  }

  /**
   * 
   * @param {number} current current index of quiz
   * @param {number} total total questions of quiz
   */
  showProgress(current, total) {
    const progress = document.querySelector('.progress');
    progress.innerHTML = `Question ${current} of ${total}`;
  }
}