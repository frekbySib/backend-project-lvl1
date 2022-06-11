import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../index.js';
import getRandomNum from '../getRandomNum.js';

const calc = () => {
  let count = 0;
  let goodCount = 0;
  const signs = ['+', '-', '*'];
  let ans;
  const userName = greeting();
  console.log('What is the result of the expression?');
  while (count < 3) {
    const randomNum1 = getRandomNum(1, 10);
    const randomNum2 = getRandomNum(1, 10);
    const sign = signs[getRandomNum(0, 2)];
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
    count += 1;
  }
  if (goodCount === 3) {
    reportWin(userName);
  }
};
export default calc;
