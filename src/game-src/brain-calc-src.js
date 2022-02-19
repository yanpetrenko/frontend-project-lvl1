#!/usr/bin/env node
/* eslint-disable linebreak-style */

const brainCalc = () => {
  let oper = '';
  const first = Math.floor(Math.random() * 25);
  const second = Math.floor(Math.random() * 25);
  const random = Math.floor(Math.random() * 3);
  random === 0 ? oper += '+' : '';
  random === 1 ? oper += '-' : '';
  random === 2 ? oper += '*' : '';
  const question = `${first} ${oper} ${second}`;
  let correctAnswer = '';
  oper === '+' ? correctAnswer = first + second : '';
  oper === '-' ? correctAnswer = first - second : '';
  oper === '*' ? correctAnswer = first * second : '';
  return [question, correctAnswer];
};
export default brainCalc;
