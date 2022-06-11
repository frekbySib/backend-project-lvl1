import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../index.js';
import getRandomNum from '../getRandomNum.js';

const isPrime = (num) => {
  if (num < 2) return false;

  const maxDelimiter = num / 2;

  for (let delimiter = 2; delimiter <= maxDelimiter; delimiter += 1) {
    if (num % delimiter === 0) return false;
  }

  return true;
};

const primeGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let x = 0; x < 3; x += 1) {
    const num = getRandomNum(1, 10);
    sendQuestion(num);
    const userAnswer = getAnswer();
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    if (userAnswer !== correctAnswer) {
      reportFail(userAnswer, correctAnswer, userName);
      return;
    }
    reportGoodStep();
  }
  reportWin(userName);
};
export default primeGame;
