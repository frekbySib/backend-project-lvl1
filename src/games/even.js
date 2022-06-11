import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../index.js';
import getRandomNum from '../getRandomNum.js';

const evenGame = () => {
  const userName = greeting();
  let count = 0;
  let goodCount = 0;
  let ans;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const randomNum = getRandomNum(1, 20);
    sendQuestion(randomNum);
    ans = getAnswer();
    if (!['yes', 'no'].includes(ans)) {
      reportFail(ans, randomNum % 2 === 0 ? 'yes' : 'no', userName);
      break;
    }
    if (
      (ans === 'yes' && randomNum % 2 === 0) || (ans === 'no' && randomNum % 2 !== 0)
    ) {
      reportGoodStep();
      goodCount += 1;
    } else if (ans === 'yes') {
      reportFail('yes', 'no', userName);
      break;
    } else {
      reportFail('no', 'yes', userName);
      break;
    }
    count += 1;
  }
  if (goodCount === 3) {
    reportWin(userName);
  }
};
export default evenGame;