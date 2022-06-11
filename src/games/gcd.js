import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gcdGame = () => {
  let count = 0;
  let goodCount = 0;
  let ans;
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  while (count < 3) {
    const x = getRandomNum(1, 20);
    const y = getRandomNum(1, 20);
    sendQuestion(`${x} ${y}`);
    ans = getAnswer();

    const getNod = (arg1, arg2) => {
      if (arg2 > arg1) return getNod(arg2, arg1);
      if (!arg2) return arg1;
      return getNod(arg2, arg1 % arg2);
    };

    const nod = getNod(x, y);

    if (Number(ans) === nod) {
      reportGoodStep();
      goodCount += 1;
    } else {
      reportFail(ans, nod, userName);
      break;
    }
    count += 1;
  }
  if (goodCount === 3) {
    reportWin(userName);
  }
};
export default gcdGame;
