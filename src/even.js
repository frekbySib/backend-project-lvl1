import readlineSync from "readline-sync";

export const greeting = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const evenGame = (userName) => {
  let count = 0;
  let goodCount = 0;
  let answer;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count < 3) {
    const randomNumber = Math.floor(Math.random() * 20 + 1);
    console.log(`Question: ${randomNumber}`);
    answer = readlineSync.question("Your answer: ");
    if (answer === "yes" && randomNumber % 2 === 0) {
      console.log("Correct!");
      goodCount += 1;
    } else if (answer === "no" && randomNumber % 2 !== 0) {
      console.log("Correct!");
      goodCount += 1;
    } else {
      console.log(
        `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`
      );
      break;
    }
    count++;
  }
  if (goodCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
