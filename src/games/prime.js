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
  let goodCount = 0;
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (goodCount < 3) {
    const num = getRandomNum(1, 10);
    sendQuestion(num);
    const userAnswer = getAnswer();
    const correctAnswer = isPrime(num) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      reportFail(userAnswer, correctAnswer, userName);
      return;
    }
    reportGoodStep();
    goodCount += 1;
  }
  reportWin(userName);
};
export default primeGame;
