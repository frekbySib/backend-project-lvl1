import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../src/index.js';

const progressionGame = () => {
  let count = 0;
  let goodCount = 0;
  let ans;
  const userName = greeting();
  console.log('What number is missing in the progression?');

  while (count < 3) {
    const randomNum = Math.floor(Math.random() * 20 + 1);
    const progStep = Math.floor(Math.random() * 10 + 1);
    const randomIndex = Math.floor(Math.random() * 10);
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
