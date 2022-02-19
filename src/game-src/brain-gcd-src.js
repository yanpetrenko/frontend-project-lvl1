#!/usr/bin/env node
/* eslint-disable linebreak-style */

const brainGcd = () => {
  const first = Math.floor(Math.random() * 25);
  const second = Math.floor(Math.random() * 25);
  const question = `${first} ${second}`;
  let correctAnswer;
  for (let i = 25; i > 0; i -= 1) {
    if (first % i === 0 && second % i === 0) {
      correctAnswer = i;
      break;
    }
  }
  return [question, correctAnswer];
};
export default brainGcd;
