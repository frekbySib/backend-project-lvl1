import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../src/index.js';

export const gcdGame = () => {
  let count = 0;
  let goodCount = 0;
  let ans;
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  while (count < 3) {
    const x = Math.floor(Math.random() * 20 + 1);
    const y = Math.floor(Math.random() * 20 + 1);
    sendQuestion(`${x} ${y}`);
    ans = getAnswer();

    const getNod = (x, y) => {
      if (y > x) return getNod(y, x);
      if (!y) return x;
      return getNod(y, x % y);
    };

    const nod = getNod(x, y);

    if (Number(ans) === nod) {
      reportGoodStep();
      goodCount += 1;
    } else {
      reportFail(ans, nod, userName);
      break;
    }
    count++;
  }
  if (goodCount === 3) {
    reportWin(userName);
  }
};
