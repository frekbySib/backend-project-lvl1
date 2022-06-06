import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../src/index.js';

export const calc = () => {
  let count = 0;
  let goodCount = 0;
  const signs = ['+', '-', '*'];
  let ans;
  const userName = greeting();
  console.log('What is the result of the expression?');
  while (count < 3) {
    const randomNum1 = Math.floor(Math.random() * 20 + 1);
    const randomNum2 = Math.floor(Math.random() * 20 + 1);
    const sign = signs[Math.floor(Math.random() * signs.length)];
    sendQuestion(`${randomNum1} ${sign} ${randomNum2}`);
    ans = getAnswer();
    let result = 0;

    switch (sign) {
      case '+':
        result = randomNum1 + randomNum2;
        break;
      case '-':
        result = randomNum1 - randomNum2;
        break;
      case '*':
        result = randomNum1 * randomNum2;
        break;
      default:
        result = null;
    }
    if (result === Number(ans)) {
      reportGoodStep();
      goodCount += 1;
    } else {
      reportFail(ans, result, userName);
      break;
    }
    count++;
  }
  if (goodCount === 3) {
    reportWin(userName);
  }
};
