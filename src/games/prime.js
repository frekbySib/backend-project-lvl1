import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../index.js';

const primeGame = () => {
  const primeNum = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  ];
  let count = 0;
  let goodCount = 0;
  let ans;
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (count < 3) {
    const randomNum = Math.floor(Math.random() * primeNum.at(-1) + 1);
    sendQuestion(randomNum);
    ans = getAnswer();
    const availableAnswers = ['yes', 'no'];

    if (primeNum.includes(randomNum) && !availableAnswers.includes(ans)) {
      reportFail(ans, 'yes', userName);
      break;
    } else if (
      !primeNum.includes(randomNum) && !availableAnswers.includes(ans)
    ) {
      reportFail(ans, 'no', userName);
      break;
    }

    if (primeNum.includes(randomNum) && ans === 'yes') {
      reportGoodStep();
      goodCount += 1;
    } else if (!primeNum.includes(randomNum) && ans !== 'yes') {
      reportGoodStep();
      goodCount += 1;
    } else {
      reportFail(ans, ans === 'yes' ? 'no' : 'yes', userName);
      break;
    }
    count += 1;
  }
  if (goodCount === 3) {
    reportWin(userName);
  }
};
export default primeGame;
