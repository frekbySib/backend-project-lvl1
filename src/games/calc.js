import getRandomNum from '../getRandomNum.js';
import { playGame, questionsCount } from '../index.js';

const calculateExpression = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

export default () => {
  const rule = 'What is the result of the expression?';

  const questionsAndAnswers = [];
  const signs = ['+', '-', '*'];

  for (let questionNum = 0; questionNum < questionsCount; questionNum += 1) {
    const num1 = getRandomNum(1, 10);
    const num2 = getRandomNum(1, 10);
    const sign = signs[getRandomNum(0, 2)];
    const question = `${num1} ${sign} ${num2}`;
    const answer = calculateExpression(num1, num2, sign);
    questionsAndAnswers.push([question, String(answer)]);
  }

  playGame(rule, questionsAndAnswers);
};
