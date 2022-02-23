/* eslint-disable linebreak-style */

const brainPrime = () => {
  const question = Math.floor(Math.random() * 50);
  let divs = 0;
  for (let i = 1; i <= question; i += 1) {
    if (question % i === 0) {
      divs += i;
    }
  }
  if (divs === question + 1) {
    return [question, 'yes'];
  }
  return [question, 'no'];
};
export default brainPrime;
