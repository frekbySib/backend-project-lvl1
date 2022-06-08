import readlineSync from 'readline-sync';

// Приветствие
export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

// Задать вопрос игроку.
export const sendQuestion = (str) => console.log(`Question: ${str}`);

// Получить ответ на вопрос от игрока
export const getAnswer = () => readlineSync.question('Your answer: ');

// Уведомить о корректном ответе
export const reportGoodStep = () => {
  console.log('Correct!');
};

// Расстроить
export const reportFail = (atr1, atr2, userName) => {
  console.log(
    `'${atr1}' is wrong answer ;(. Correct answer was '${atr2}'.\nLet's try again, ${userName}!`,
  );
};

// Уведомить о победе в игре
export const reportWin = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
