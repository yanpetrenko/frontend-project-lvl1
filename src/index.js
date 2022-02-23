import readlineSync from 'readline-sync';
import intro from './cli.js';

const check = (func, rules) => {
  const username = `${intro()}`;
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = func();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${username}!`);
      }
    }
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer; Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${username}!`);
      break;
    }
  }
};
export default check;
