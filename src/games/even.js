import getRandomNum from '../getRandomNum.js';
import { playGame, questionsCount } from '../index.js';

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const questionsAndAnswers = [];
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  let step = 0;
  while (step < questionsCount) {
    const num = getRandomNum(1, 30);
    const question = num;
    const answer = isEven(num) ? 'yes' : 'no';
    questionsAndAnswers.push([question, answer]);
    step += 1;
  }

  playGame(rule, questionsAndAnswers);
};
export default evenGame;
