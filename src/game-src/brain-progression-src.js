#!/usr/bin/env node
/* eslint-disable linebreak-style */

const brainProgression = () => {
  const quantity = Math.floor(Math.random() * 7) + 5;
  const step = Math.floor(Math.random() * 5);
  const miss = Math.floor(Math.random() * quantity);
  const firstD = Math.floor(Math.random() * 10) + 1;
  const arr = [firstD];
  for (let i = 0; i < quantity; i += 1) {
    arr.push(arr[arr.length - 1] + step);
  }
  const correctAnswer = arr[miss];
  arr[miss] = '..';
  return [arr, correctAnswer];
};
export default brainProgression;
