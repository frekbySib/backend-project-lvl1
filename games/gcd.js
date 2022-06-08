import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../src/index.js';

const gcdGame = () => {
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
