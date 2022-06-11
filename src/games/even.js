import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../index.js';
import getRandomNum from '../getRandomNum.js';

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let questionNum = 0; questionNum < 3; questionNum += 1) {
    const num = getRandomNum(1, 30);
    sendQuestion(num);
    const ans = getAnswer();
    const correctAnswer = isEven(num) ? 'yes' : 'no';

    if (ans !== correctAnswer) {
      reportFail(ans, correctAnswer, userName);
      return;
    }
    reportGoodStep();
  }
  reportWin(userName);
};
export default evenGame;
