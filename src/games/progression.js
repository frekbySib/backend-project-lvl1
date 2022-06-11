import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../index.js';
import getRandomNum from '../getRandomNum.js';

const progressionGame = () => {
  let count = 0;
  let goodCount = 0;
  let ans;
  const userName = greeting();
  console.log('What number is missing in the progression?');

  while (count < 3) {
    const randomNum = getRandomNum(1, 20);
    const progStep = getRandomNum(1, 10);
    const randomIndex = getRandomNum(0, 9);
    const gameArray = [];
    gameArray.push(randomNum);
    while (gameArray.length < 10) {
      let lastEl = gameArray.at(-1);
      gameArray.push((lastEl += progStep));
    }

    const item = gameArray[randomIndex];
    gameArray[randomIndex] = '..';

    sendQuestion(gameArray.join(' '));
    ans = getAnswer();

    if (Number(ans) === item) {
      reportGoodStep();
      goodCount += 1;
    } else {
      reportFail(ans, item, userName);
      break;
    }
    count += 1;
  }
  if (goodCount === 3) {
    reportWin(userName);
  }
};
export default progressionGame;
