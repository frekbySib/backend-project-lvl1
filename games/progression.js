import {
  greeting,
  sendQuestion,
  getAnswer,
  reportGoodStep,
  reportFail,
  reportWin,
} from '../src/index.js';

export const progressionGame = () => {
  let count = 0;
  let goodCount = 0;
  let ans;
  const userName = greeting();
  console.log('What number is missing in the progression?');

  while (count < 3) {
    const randomNum = Math.floor(Math.random() * 20 + 1);
    const progStep = Math.floor(Math.random() * 10 + 1);
    const randomIndex = Math.floor(Math.random() * 10);

    const progressionArray = (randomNum, progStep) => {
      let array = [randomNum];
      for (let i = 0; i <= 9; i += 1) {
        if (array.length === 10) {
          return array;
        } else {
          let nextNumber = (randomNum += progStep);
          array.push(nextNumber);
        }
      }
    };

    const gameArray = progressionArray(randomNum, progStep);
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
    count++;
  }
  if (goodCount === 3) {
    reportWin(userName);
  }
};
