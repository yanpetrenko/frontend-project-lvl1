#!/usr/bin/env node
/* eslint-disable linebreak-style */

const brainCalc = () => {
  let oper = '';
  const first = Math.floor(Math.random() * 25);
  const second = Math.floor(Math.random() * 25);
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    oper += '+';
  }
  if (random === 1) {
    oper += '-';
  }
  if (random === 2) {
    oper += '*';
  }
  const question = `${first} ${oper} ${second}`;
  let correctAnswer = '';
  if (oper === '+') {
    correctAnswer = first + second;
  }
  if (oper === '-') {
    correctAnswer = first - second;
  }
  if (oper === '*') {
    correctAnswer = first * second;
  }
  return [question, String(correctAnswer)];
};
export default brainCalc;
