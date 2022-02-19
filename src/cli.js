/* eslint-disable linebreak-style */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const intro = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default intro;
